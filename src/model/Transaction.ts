import type { MetaEvidence } from "./MetaEvidence";
import type { TimelineEvent } from "./TimelineEvent";

export enum TransactionStatus {
  NoDispute,
  WaitingSender,
  WaitingReceiver,
  DisputeCreated,
  Resolved,
}

export enum DisputeRuling {
  "Jurors refused to arbitrate",
  "Jurors ruled in favor of the sender",
  "Jurors ruled in favor of the receiver",
}

interface BaseTransaction {
  id: bigint;
  createdAt: string;
  lastInteraction: number;
  arbitrableAddress: string;
  metaEvidence: MetaEvidence;
  formattedStatus: string;
}

//Used for cards
export interface TransactionMini extends BaseTransaction {
  userPartyLabel: string;
  otherPartyAddress: string;
}

//Used for detailed view
export interface Transaction extends BaseTransaction {
  amountInEscrow: string;
  disputeId: bigint;
  blockExplorerLink: string;
  timeline: TimelineEvent[];
  status: number;
}
