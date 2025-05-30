import {
  MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ADDRESS,
  MULTIPLE_ARBITRABLE_TRANSACTION_ADDRESS,
} from "config/contracts/addresses";
import { wagmiConfig } from "config/reown";
import { useAccount, useClient } from "wagmi";
import { multicall } from "wagmi/actions";
import { useQuery } from "@tanstack/react-query";
import { MULTIPLE_ARBITRABLE_TRANSACTION_ABI } from "config/contracts/abi/multipleArbitrableTransaction";
import { MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ABI } from "config/contracts/abi/mutlipleArbitrableTokenTransaction";
import { getBlock, getLogs } from "viem/actions";
import { parseAbiItem, type Client, type GetLogsReturnType } from "viem";
import { useMemo } from "react";
import { ipfsFetch } from "utils/ipfs";
import type { MetaEvidence } from "model/MetaEvidence";
import type { Transaction } from "model/Transaction";

//Batch fetch all tx IDs for the connected wallet, from all contracts
async function fetchTxIDsByContract(
  contractAddresses: `0x${string}`[],
  address: `0x${string}`
) {
  return await multicall(wagmiConfig, {
    contracts: [
      {
        abi: MULTIPLE_ARBITRABLE_TRANSACTION_ABI,
        address: contractAddresses[0],
        functionName: "getTransactionIDsByAddress",
        args: [address],
      },
      {
        abi: MULTIPLE_ARBITRABLE_TRANSACTION_ABI,
        address: contractAddresses[1],
        functionName: "getTransactionIDsByAddress",
        args: [address],
      },
      {
        abi: MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ABI,
        address: contractAddresses[2],
        functionName: "getTransactionIDsByAddress",
        args: [address],
      },
      {
        abi: MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ABI,
        address: contractAddresses[3],
        functionName: "getTransactionIDsByAddress",
        args: [address],
      },
    ],
  });
}

//Batch fetch details for the txIDs, for a given contract
async function fetchContractTxDetails(
  contractAddress: `0x${string}`,
  abi:
    | typeof MULTIPLE_ARBITRABLE_TRANSACTION_ABI
    | typeof MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ABI,
  txIDs: readonly bigint[]
) {
  return await multicall(wagmiConfig, {
    contracts: txIDs.map((txID) => ({
      abi,
      address: contractAddress,
      functionName: "transactions" as const,
      args: [txID],
    })),
  });
}

//Parse the meta evidence event only once
const metaEvidenceEvent = parseAbiItem(
  "event MetaEvidence(uint indexed _metaEvidenceID, string _evidence)"
);

//Batch fetch meta evidence logs for the txIDs, for a given contract
async function fetchContractMetaEvidenceLogs(
  contractAddress: `0x${string}`,
  client: Client,
  txIDs: readonly bigint[]
) {
  return await getLogs(client, {
    address: contractAddress,
    event: metaEvidenceEvent,
    args: { _metaEvidenceID: [...txIDs] },
    fromBlock: 0n,
    toBlock: "latest",
  });
}

//Type of the return from getLogs - an array of logs for the meta evidence event
type MetaEvidenceLogs = GetLogsReturnType<typeof metaEvidenceEvent>;

//Fetch from IPFS the JSON content for each log in the array
async function fetchLogsContentFromIPFS(logs: MetaEvidenceLogs) {
  return await Promise.all(
    logs.map(async (log) => {
      try {
        if (!log.args._evidence) return null;
        const content = await ipfsFetch(log.args._evidence);
        return content as MetaEvidence;
      } catch (error) {
        console.error(
          `Failed to fetch IPFS content for txID ${log.args._metaEvidenceID}: ${error}`
        );
        return null;
      }
    })
  );
}

//Fetch the timestamps for the block numbers, so we can display the transaction date
async function fetchBlockTimestamps(client: Client, blockNumbers: bigint[]) {
  return await Promise.all(
    blockNumbers.map(async (blockNumber) => {
      const block = await getBlock(client, { blockNumber });
      return block.timestamp;
    })
  );
}

export function useTransactions() {
  const { address, chain } = useAccount();
  const client = useClient();

  const contractAddresses = useMemo(() => {
    if (!chain) return [];

    return [
      MULTIPLE_ARBITRABLE_TRANSACTION_ADDRESS[chain.id]
        .BLOCKCHAIN_NON_TECHNICAL,
      MULTIPLE_ARBITRABLE_TRANSACTION_ADDRESS[chain.id].GENERAL_COURT,
      MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ADDRESS[chain.id]
        .BLOCKCHAIN_NON_TECHNICAL,
      MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ADDRESS[chain.id].GENERAL_COURT,
    ];
  }, [chain]);

  return useQuery<Transaction[]>({
    queryKey: ["transactions", address, chain?.id],
    queryFn: async () => {
      if (!chain || !address || !client) return [];

      //First get all txIDs, from the respective contracts
      const txIDsByContract = await fetchTxIDsByContract(
        contractAddresses,
        address
      );

      const txsByContract = await Promise.all(
        //Then, for each contract
        contractAddresses.map(async (contractAddress, contractIndex) => {
          //Get the respective txIDs
          const txIDs = txIDsByContract[contractIndex]?.result ?? [];
          if (!txIDs.length) return [];

          //Batch fetch details for the txIDs
          const txDetails = await fetchContractTxDetails(
            contractAddress,
            contractIndex < 2
              ? MULTIPLE_ARBITRABLE_TRANSACTION_ABI
              : MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ABI,
            txIDs
          );

          //Batch fetch meta evidence logs for the txIDs
          const metaEvidenceLogs = await fetchContractMetaEvidenceLogs(
            contractAddress,
            client,
            txIDs
          );

          //Batch fetch from IPFS the JSON content for each log
          const metaEvidenceContent = await fetchLogsContentFromIPFS(
            metaEvidenceLogs
          );

          //Batch fetch the timestamps for the block numbers
          const blockTimestamps = await fetchBlockTimestamps(
            client,
            metaEvidenceLogs.map((log) => log.blockNumber)
          );

          //Map the results to a Transaction object
          const txs = txDetails
            .map((tx, index) => {
              //Get the corresponding meta evidence content - we can rely on the order of Promise.all
              const metaEvidence = metaEvidenceContent[index];

              //Shouldn't happen, but if we did not get the details or the meta evidence, skip for now
              if (tx.status !== "success" || !metaEvidence) return null;

              //Get the corresponding txID - we can rely on the order of multicall
              const txID = txIDs[index];

              //Create a transaction object with the information we need
              const formattedTx: Transaction = {
                id: txID,
                createdAt: new Date(
                  parseInt(blockTimestamps[index].toString()) * 1000
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }),
                arbitrableAddress: contractAddress,
                metaEvidence: metaEvidence,
                party: metaEvidence?.aliases[address],
                escrowAmount: tx.result[2].toString(), //amount in escrow
                originalAmount: metaEvidence?.amount,
                status: tx.result[tx.result.length - 1] as number, //status
                lastInteraction: Number(tx.result[tx.result.length - 2]), //last interaction
              };

              return formattedTx;
            })
            .filter((tx) => tx !== null); //remove nulls as we don't have the needed information to display

          return txs;
        })
      );

      //Return a single array of all transactions
      return txsByContract
        .flat()
        .sort((a, b) => b.lastInteraction - a.lastInteraction);
    },
    enabled: !!chain && !!address,
    initialData: [],
  });
}
