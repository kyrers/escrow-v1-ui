import { useAccount, useClient } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { getBlock, getLogs, readContract } from "viem/actions";
import { formatUnits, type Client, type GetLogsReturnType } from "viem";
import { ipfsFetch } from "utils/ipfs";
import type { MetaEvidence } from "model/MetaEvidence";
import { TransactionStatus, type Transaction } from "model/Transaction";
import { mapTransactionStatus } from "utils/transaction";
import { QUERY_KEYS } from "config/queryKeys";
import { addressToAbi, getBlockExplorerLink } from "utils/common";
import { metaEvidenceEvent } from "config/contracts/events";

//Type of the return from getLogs - an array of logs for the meta evidence event
type MetaEvidenceLogs = GetLogsReturnType<typeof metaEvidenceEvent>;

async function fetchDetails(
  client: Client,
  contractAddress: `0x${string}`,
  id: bigint
) {
  return await readContract(client, {
    abi: addressToAbi(contractAddress),
    address: contractAddress,
    functionName: "transactions" as const,
    args: [id],
  });
}

async function fetchMetaEvidenceLog(
  client: Client,
  contractAddress: `0x${string}`,
  id: bigint
) {
  //NOTE: viem client defaults to mainnet, so if no wallet is connected, it is only possible to get logs for mainnet.
  const logs = await getLogs(client, {
    address: contractAddress,
    event: metaEvidenceEvent,
    args: { _metaEvidenceID: id },
    fromBlock: 0n,
    toBlock: "latest",
  });

  return logs[0];
}

async function fetchMetaEvidenceContent(log: MetaEvidenceLogs[0]) {
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
}

async function fetchBlockTimestamp(client: Client, blockNumber: bigint) {
  return (await getBlock(client, { blockNumber: blockNumber })).timestamp;
}

interface Props {
  id: bigint;
  contractAddress: `0x${string}`;
}

export function useTransactionDetails({ id, contractAddress }: Props) {
  const client = useClient();
  const { chainId } = useAccount();

  return useQuery<Transaction | undefined>({
    queryKey: [QUERY_KEYS.transactionDetails, id.toString(), contractAddress],
    queryFn: async () => {
      if (!client) return undefined;

      const [details, metaEvidenceLog] = await Promise.all([
        fetchDetails(client, contractAddress, id),
        fetchMetaEvidenceLog(client, contractAddress, id),
      ]);

      const [metaEvidence, blockTimestamp] = await Promise.all([
        fetchMetaEvidenceContent(metaEvidenceLog),
        fetchBlockTimestamp(client, metaEvidenceLog.blockNumber),
      ]);

      if (!metaEvidence) return undefined;

      const amountInEscrow = formatUnits(
        details[2],
        (metaEvidence.token.decimals as number) ?? 18
      );

      const formattedTx: Transaction = {
        id: id,
        createdAt: new Date(
          parseInt(blockTimestamp.toString()) * 1000
        ).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        arbitrableAddress: contractAddress,
        metaEvidence: metaEvidence,
        status: mapTransactionStatus(
          TransactionStatus[details[details.length - 1] as number],
          amountInEscrow
        ),
        lastInteraction: Number(details[details.length - 2]),
        amountInEscrow: amountInEscrow,
        blockExplorerLink: getBlockExplorerLink(
          metaEvidenceLog.transactionHash,
          chainId ?? 1
        ),
      };

      return formattedTx;
    },
    enabled: typeof id === "bigint" && !!contractAddress,
    refetchOnWindowFocus: false,
  });
}
