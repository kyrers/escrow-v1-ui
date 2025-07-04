import { useState } from "react";
import { useNavigate } from "react-router";
import {
  MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ADDRESS,
  MULTIPLE_ARBITRABLE_TRANSACTION_ADDRESS,
} from "config/contracts/addresses";
import {
  useWriteMultipleArbitrableTokenTransactionCreateTransaction,
  useWriteMultipleArbitrableTransactionCreateTransaction,
} from "config/contracts/generated";
import { useNewTransactionContext } from "context/newTransaction/useNewTransactionContext";
import {
  parseUnits,
  zeroAddress,
  erc20Abi,
  BaseError,
  decodeEventLog,
} from "viem";
import {
  readContract,
  simulateContract,
  waitForTransactionReceipt,
} from "viem/actions";
import { useAccount, useWriteContract, useClient } from "wagmi";
import { getBalance } from "wagmi/actions";
import { wagmiConfig } from "config/reown";
import { MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ABI } from "config/contracts/abi/mutlipleArbitrableTokenTransaction";
import { MULTIPLE_ARBITRABLE_TRANSACTION_ABI } from "config/contracts/abi/multipleArbitrableTransaction";
import {
  nativeTransactionCreatedEvent,
  tokenTrasactionCreatedEvent,
} from "config/contracts/events";
import { ipfsPost } from "utils/ipfs";
import { uploadMetaEvidence } from "utils/metaEvidence";

export function useCreateTransaction() {
  const client = useClient();
  const navigate = useNavigate();
  const { chain } = useAccount();
  const {
    agreementFile,
    amount,
    deadline,
    description,
    escrowType,
    receiverAddress,
    senderAddress,
    title,
    token,
    resetContext,
  } = useNewTransactionContext();

  const { writeContractAsync: writeNativeContractAsync } =
    useWriteMultipleArbitrableTransactionCreateTransaction();

  const { writeContractAsync: writeTokenContractAsync } =
    useWriteMultipleArbitrableTokenTransactionCreateTransaction();

  const { writeContractAsync: writeTokenApproveAsync } = useWriteContract();

  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const isTokenTransaction = token.address !== zeroAddress;
  const court =
    escrowType === "Cryptocurrency Transaction"
      ? "BLOCKCHAIN_NON_TECHNICAL"
      : "GENERAL_COURT";

  const contractAddress = isTokenTransaction
    ? MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ADDRESS[chain!.id]?.[court]
    : MULTIPLE_ARBITRABLE_TRANSACTION_ADDRESS[chain!.id]?.[court];

  const formattedAmount = parseUnits(amount.toString(), token.decimals);

  const handleIPFSUploads = async () => {
    //Upload agreement file to IPFS, if it exists
    const agreementFileURI = agreementFile
      ? await ipfsPost(agreementFile.name, agreementFile)
      : undefined;

    //Create and upload meta evidence to IPFS
    const metaEvidenceURI = await uploadMetaEvidence({
      agreementFileURI,
      amount: amount.toString(),
      arbitrableAddress: contractAddress,
      description,
      deadline,
      receiverAddress,
      senderAddress,
      escrowType,
      title,
      token,
    });

    return metaEvidenceURI;
  };

  const handleTokenContractApproval = async () => {
    //Check if the sender has enough allowance to cover the transaction amount
    const allowance = await readContract(client!, {
      address: token.address,
      abi: erc20Abi,
      functionName: "allowance",
      args: [senderAddress as `0x${string}`, contractAddress],
    });

    //If not, ask for approval
    if (allowance < formattedAmount) {
      const approvalTxParams = {
        account: senderAddress as `0x${string}`, //Needed for the simulation, otherwise it will use the zero address and approve will fail
        address: token.address,
        abi: erc20Abi,
        functionName: "approve",
        args: [contractAddress, formattedAmount],
      } as const;

      //Simulate the approval transaction
      await simulateContract(client!, approvalTxParams);

      // Request approval if simulation is successful
      const approvalTxHash = await writeTokenApproveAsync(approvalTxParams);

      //We have to wait for the approval before actually creating the escrow tx, or it will fail
      await waitForTransactionReceipt(client!, { hash: approvalTxHash });
    }
  };

  const handleTokenEscrowCreation = async (metaEvidenceURI: string) => {
    const createTokenTxParams = {
      account: senderAddress as `0x${string}`, //Needed for the simulation, otherwise it will use the zero address nd the transferFrom in the createTransaction function will fail
      abi: MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ABI,
      address: contractAddress as `0x${string}`,
      functionName: "createTransaction",
      args: [
        formattedAmount,
        token.address,
        0n,
        receiverAddress as `0x${string}`,
        metaEvidenceURI,
      ],
    } as const;

    //Simulate the transaction
    await simulateContract(client!, createTokenTxParams);

    //Create the escrow transaction if simulation is successful
    const txHash = await writeTokenContractAsync(createTokenTxParams);
    return txHash;
  };

  const handleNativeEscrowCreation = async (metaEvidenceURI: string) => {
    const createNativeTxParams = {
      abi: MULTIPLE_ARBITRABLE_TRANSACTION_ABI,
      address: contractAddress as `0x${string}`,
      functionName: "createTransaction",
      args: [0n, receiverAddress as `0x${string}`, metaEvidenceURI],
      value: formattedAmount,
    } as const;

    //Simulate the transaction
    await simulateContract(client!, createNativeTxParams);

    //Create the escrow transaction if simulation is successful
    const txHash = await writeNativeContractAsync(createNativeTxParams);
    return txHash;
  };

  const handleTransactionReceipt = async (txHash: `0x${string}`) => {
    const receipt = await waitForTransactionReceipt(client!, { hash: txHash });

    //Get the transaction created event abi and the index of the log in the receipt
    const [transactionCreatedEventAbi, transactionCreatedEventIndex] =
      isTokenTransaction
        ? [tokenTrasactionCreatedEvent, 2]
        : [nativeTransactionCreatedEvent, 1];

    const event = decodeEventLog({
      abi: [transactionCreatedEventAbi],
      strict: false,
      data: receipt.logs[transactionCreatedEventIndex].data,
      topics: receipt.logs[transactionCreatedEventIndex].topics,
    });

    return event.args._transactionID;
  };

  const createTransaction = async () => {
    setError(undefined);
    setIsCreating(true);

    if (!client) {
      setError("No blockchain client found");
      setIsCreating(false);
      return;
    }

    if (!contractAddress) {
      setError("No contract address found for current network");
      setIsCreating(false);
      return;
    }

    //Check if the sender has enough balance to cover the transaction amount, if not, we can stop right now
    const userBalance = await getBalance(wagmiConfig, {
      address: senderAddress as `0x${string}`,
      ...(isTokenTransaction ? { token: token.address } : {}),
    });

    if (userBalance.value < formattedAmount) {
      setError("Insufficient balance");
      setIsCreating(false);
      return;
    }

    try {
      const metaEvidenceURI = await handleIPFSUploads();

      let txHash: `0x${string}`;
      if (isTokenTransaction) {
        await handleTokenContractApproval();
        txHash = await handleTokenEscrowCreation(metaEvidenceURI);
      } else {
        txHash = await handleNativeEscrowCreation(metaEvidenceURI);
      }

      const txID = await handleTransactionReceipt(txHash);

      setIsCreating(false);
      resetContext();

      //Navigate to the transaction details page
      navigate(`/transaction/${contractAddress}/${txID}`);
    } catch (error) {
      //Log the error to the console for debugging purposes
      console.error(error);

      //Workaround to check if the error is a user rejected request error, as it is known that viem's UserRejectedRequestError does not catch this...
      const isUserRejectedRequestError =
        error instanceof BaseError &&
        (error as BaseError).shortMessage.includes("User rejected the request");

      //Do not show error if user rejected the request
      if (!isUserRejectedRequestError) {
        setError(
          "Please verify your inputs and try again. If the error persists, please reach out via Discord or Telegram."
        );
      }

      setIsCreating(false);
    }
  };

  return {
    isCreating,
    error,
    createTransaction,
  };
}
