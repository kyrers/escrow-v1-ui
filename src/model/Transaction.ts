import type { MetaEvidence } from "./MetaEvidence";

export enum TransactionStatus {
  NoDispute,
  WaitingSender,
  WaitingReceiver,
  DisputeCreated,
  Resolved,
}

interface BaseTransaction {
  id: bigint;
  createdAt: string;
  lastInteraction: number;
  arbitrableAddress: string;
  metaEvidence: MetaEvidence;
  status: string;
}

//Used for cards
export interface TransactionMini extends BaseTransaction {
  userPartyLabel: string;
  otherPartyAddress: string;
}

//Used for detailed view
export interface Transaction extends BaseTransaction {
  amountInEscrow: string;
  blockExplorerLink: string;
}
