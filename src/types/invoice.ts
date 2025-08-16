export interface Invoice {
  id: string;
  creator: string; // User A's address
  recipient: string; // User B's address
  amount: string;
  currency: string;
  description: string;
  status: InvoiceStatus;
  createdAt: number;
  updatedAt: number;
  dueDate?: number;
  metadata?: Record<string, any>;
}

export enum InvoiceStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  PAID = 'PAID',
  EXPIRED = 'EXPIRED'
}

export interface CreateInvoiceRequest {
  recipient: string;
  amount: string;
  currency: string;
  description: string;
  dueDate?: number;
  metadata?: Record<string, any>;
}

export interface InvoiceResponse {
  accept: () => Promise<void>;
  reject: () => Promise<void>;
  pay: () => Promise<void>;
}
