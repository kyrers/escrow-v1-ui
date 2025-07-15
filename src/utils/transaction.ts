import {
  metaEvidenceEvent,
  paymentEvent,
  hasToPayFeeEvent,
  rulingEvent,
  disputeEvent,
  appealDecisionEvent,
  evidenceEvent,
  type ContractEventLogs,
  type EvidenceLogs,
} from "config/contracts/events";
import { formatUnits } from "viem";
import { addressToShortString, getBlockExplorerLink } from "./common";
import { DisputeRuling } from "model/Transaction";
import type { Evidence } from "model/Evidence";

export const mapTransactionStatus = (
  backendStatus: string,
  amountInEscrow?: string
): "Pending" | "Completed" | "Disputed" | "Unknown" => {
  switch (backendStatus) {
    case "Resolved":
      return "Completed";
    case "DisputeCreated":
      return "Disputed";
    case "WaitingSender":
    case "WaitingReceiver":
      return "Pending";
    case "NoDispute":
      //Check if the transaction has been paid (amount in escrow is 0)
      return amountInEscrow === "0" ? "Completed" : "Pending";
    default:
      return "Unknown";
  }
};

export function formatTimelineEvents(
  timelineEvents: ContractEventLogs,
  evidenceLogs: EvidenceLogs,
  evidenceContent: Evidence[],
  blockTimestamps: bigint[],
  receiver: string,
  sender: string,
  ticker: string,
  decimals: number,
  chainId: number
) {
  return timelineEvents.map((event, index) => {
    switch (event.eventName) {
      case metaEvidenceEvent.name:
        return {
          title: "Escrow created",
          date: new Date(
            parseInt(blockTimestamps[index].toString()) * 1000
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          txURL: getBlockExplorerLink(event.transactionHash, chainId),
        };
      case paymentEvent.name:
        return {
          title: `${formatUnits(
            event.args._amount as bigint,
            decimals
          )} ${ticker} paid by ${addressToShortString(
            event.args._party as string
          )}`,
          date: new Date(
            parseInt(blockTimestamps[index].toString()) * 1000
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          txURL: getBlockExplorerLink(event.transactionHash, chainId),
        };
      case hasToPayFeeEvent.name:
        return {
          title: `${
            event.args._party === 0
              ? addressToShortString(sender)
              : addressToShortString(receiver)
          } has to pay fee`,
          date: new Date(
            parseInt(blockTimestamps[index].toString()) * 1000
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          txURL: getBlockExplorerLink(event.transactionHash, chainId),
        };
      case disputeEvent.name:
        return {
          title: `Dispute created`,
          date: new Date(
            parseInt(blockTimestamps[index].toString()) * 1000
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          txURL: getBlockExplorerLink(event.transactionHash, chainId),
        };
      case appealDecisionEvent.name:
        return {
          title: "Appealed",
          date: new Date(
            parseInt(blockTimestamps[index].toString()) * 1000
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          txURL: getBlockExplorerLink(event.transactionHash, chainId),
        };
      case evidenceEvent.name: {
        const evidenceIndex = evidenceLogs.findIndex(
          (log) => log.transactionHash === event.transactionHash
        );
        const evidence = evidenceContent[evidenceIndex];

        return {
          title: `${addressToShortString(
            event.args._party as string
          )} submitted "${evidence.name}" as evidence`,
          date: new Date(
            parseInt(blockTimestamps[index].toString()) * 1000
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          txURL: getBlockExplorerLink(event.transactionHash, chainId),
          evidenceURI: evidence.fileURI,
        };
      }
      case rulingEvent.name:
        return {
          title: `${DisputeRuling[Number(event.args._ruling)]}`,
          date: new Date(
            parseInt(blockTimestamps[index].toString()) * 1000
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          txURL: getBlockExplorerLink(event.transactionHash, chainId),
        };
    }
  });
}
