import type { MetaEvidence } from "./MetaEvidence";

export enum TransactionStatus {
  NoDispute,
  WaitingSender,
  WaitingReceiver,
  DisputeCreated,
  Resolved,
}

export interface Transaction {
  id: bigint;
  createdAt: string;
  lastInteraction: number;
  arbitrableAddress: string;
  metaEvidence: MetaEvidence;
  party: string;
  otherParty: string;
  escrowAmount: string;
  originalAmount: string;
  status: string;
}
