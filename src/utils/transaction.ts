import {
  metaEvidenceEvent,
  paymentEvent,
  hasToPayFeeEvent,
  rulingEvent,
  disputeEvent,
  appealDecisionEvent,
  type ContractEventLogs,
} from "config/contracts/events";
import { formatUnits } from "viem";
import { addressToShortString, getBlockExplorerLink } from "./common";
import { DisputeRuling } from "model/Transaction";

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
          subtitle: new Date(
            parseInt(blockTimestamps[index].toString()) * 1000
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          party: getBlockExplorerLink(event.transactionHash, chainId),
        };
      case paymentEvent.name:
        return {
          title: `${formatUnits(
            event.args._amount as bigint,
            decimals
          )} ${ticker} paid by ${addressToShortString(
            event.args._party as string
          )}`,
          subtitle: new Date(
            parseInt(blockTimestamps[index].toString()) * 1000
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          party: getBlockExplorerLink(event.transactionHash, chainId),
        };
      case hasToPayFeeEvent.name:
        return {
          title: `${
            event.args._party === 0
              ? addressToShortString(sender)
              : addressToShortString(receiver)
          } has to pay fee`,
          subtitle: new Date(
            parseInt(blockTimestamps[index].toString()) * 1000
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          party: getBlockExplorerLink(event.transactionHash, chainId),
        };
      case disputeEvent.name:
        return {
          title: `Dispute created`,
          subtitle: new Date(
            parseInt(blockTimestamps[index].toString()) * 1000
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          party: getBlockExplorerLink(event.transactionHash, chainId),
        };
      case appealDecisionEvent.name:
        return {
          title: "Appealed",
          subtitle: new Date(
            parseInt(blockTimestamps[index].toString()) * 1000
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          party: getBlockExplorerLink(event.transactionHash, chainId),
        };
      case rulingEvent.name:
        return {
          title: `${DisputeRuling[Number(event.args._ruling)]}`,
          subtitle: new Date(
            parseInt(blockTimestamps[index].toString()) * 1000
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          party: getBlockExplorerLink(event.transactionHash, chainId),
        };
    }
  });
}
