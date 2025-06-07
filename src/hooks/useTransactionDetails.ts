import { useAccount, useClient } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { getBlock, getLogs, readContract } from "viem/actions";
import { formatUnits, type Client } from "viem";
import { ipfsFetch } from "utils/ipfs";
import type { MetaEvidence } from "model/MetaEvidence";
import { TransactionStatus, type Transaction } from "model/Transaction";
import { mapTransactionStatus } from "utils/transaction";
import { QUERY_KEYS } from "config/queryKeys";
import { addressToAbi, getBlockExplorerLink } from "utils/common";
import { formatTimelineEvents } from "utils/transaction";
import {
  appealDecisionEvent,
  disputeEvent,
  hasToPayFeeEvent,
  metaEvidenceEvent,
  paymentEvent,
  rulingEvent,
  type ContractEventLogs,
  type MetaEvidenceLogs,
} from "config/contracts/events";

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

async function fetchArbitrator(client: Client, contractAddress: `0x${string}`) {
  return await readContract(client, {
    abi: addressToAbi(contractAddress),
    address: contractAddress,
    functionName: "arbitrator" as const,
  });
}

async function fetchTimelineEvents(
  client: Client,
  contractAddress: `0x${string}`,
  arbitratorAddress: `0x${string}`,
  id: bigint,
  disputeId: bigint
) {
  const [
    metaEvidenceLogs,
    paymentLogs,
    hasToPayFeeLogs,
    disputeLogs,
    appealDecisionLogs,
    rulingLogs,
  ] = await Promise.all([
    await getLogs(client, {
      address: contractAddress,
      event: metaEvidenceEvent,
      args: { _metaEvidenceID: id },
      fromBlock: 0n,
      toBlock: "latest",
    }),
    await getLogs(client, {
      address: contractAddress,
      event: paymentEvent,
      args: { _transactionID: id },
      fromBlock: 0n,
      toBlock: "latest",
    }),
    await getLogs(client, {
      address: contractAddress,
      event: hasToPayFeeEvent,
      args: { _transactionID: id },
      fromBlock: 0n,
      toBlock: "latest",
    }),
    await getLogs(client, {
      address: contractAddress,
      event: disputeEvent,
      args: { _disputeID: disputeId, _arbitrator: arbitratorAddress },
      fromBlock: 0n,
      toBlock: "latest",
    }),
    await getLogs(client, {
      address: contractAddress,
      event: appealDecisionEvent,
      args: { _disputeID: disputeId, _arbitrable: contractAddress },
      fromBlock: 0n,
      toBlock: "latest",
    }),
    await getLogs(client, {
      address: contractAddress,
      event: rulingEvent,
      args: { _disputeID: disputeId, _arbitrator: arbitratorAddress },
      fromBlock: 0n,
      toBlock: "latest",
    }),
  ]);

  const ordered = [
    ...metaEvidenceLogs,
    ...paymentLogs,
    ...hasToPayFeeLogs,
    ...disputeLogs,
    ...appealDecisionLogs,
    ...rulingLogs,
  ].sort((a, b) => Number(a.blockNumber) - Number(b.blockNumber));

  return ordered;
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

async function fetchBlockTimestamps(client: Client, blockNumbers: bigint[]) {
  return await Promise.all(
    blockNumbers.map(async (blockNumber) => {
      const block = await getBlock(client, { blockNumber });
      return block.timestamp;
    })
  );
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

      const [details, arbitratorAddress] = await Promise.all([
        fetchDetails(client, contractAddress, id),
        fetchArbitrator(client, contractAddress),
      ]);

      const disputeId = details[details.length - 5];

      const timelineEventsLogs = await fetchTimelineEvents(
        client,
        contractAddress,
        arbitratorAddress,
        id,
        disputeId as bigint
      );

      //MetaEvidence event is emmitted when the transaction is created, and since we need it to download the meta evidence from IPFS,
      //we can use it for the Transaction Creation timeline event
      const metaEvidenceLog = timelineEventsLogs[0] as MetaEvidenceLogs[0];

      const [metaEvidence, blockTimestamps] = await Promise.all([
        fetchMetaEvidenceContent(metaEvidenceLog),
        fetchBlockTimestamps(
          client,
          timelineEventsLogs.map((log) => log.blockNumber)
        ),
      ]);

      if (!metaEvidence) return undefined;

      const amountInEscrow = formatUnits(
        details[2],
        (metaEvidence.token?.decimals as number) ?? 18
      );

      const formattedTx: Transaction = {
        id: id,
        disputeId: disputeId as bigint,
        createdAt: new Date(
          //we can rely on the order of Promise.all, so we can use the first timestamp for the createdAt date
          parseInt(blockTimestamps[0].toString()) * 1000
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
        timeline: formatTimelineEvents(
          timelineEventsLogs as ContractEventLogs,
          blockTimestamps,
          metaEvidence.receiver,
          metaEvidence.sender,
          metaEvidence.token?.ticker ?? "ETH",
          (metaEvidence.token?.decimals as number) ?? 18,
          chainId ?? 1
        ),
      };

      return formattedTx;
    },
    enabled: typeof id === "bigint" && !!contractAddress,
    refetchOnWindowFocus: false,
  });
}
