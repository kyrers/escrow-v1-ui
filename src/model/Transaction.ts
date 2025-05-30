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
  arbitrableAddress: string;
  metaEvidence: MetaEvidence;
  party: string;
  escrowAmount: string;
  originalAmount: string;
  status: number;
}
