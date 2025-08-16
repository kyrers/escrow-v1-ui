import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAccount } from 'wagmi';
import type { Invoice, CreateInvoiceRequest } from '../types/invoice';
import { InvoiceStatus } from '../types/invoice';

// Mock data storage - in a real app, this would be stored in a database or smart contract
const INVOICES_STORAGE_KEY = 'escrow_invoices';

// Helper functions for localStorage
const getStoredInvoices = (): Invoice[] => {
  try {
    const stored = localStorage.getItem(INVOICES_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const storeInvoices = (invoices: Invoice[]) => {
  try {
    localStorage.setItem(INVOICES_STORAGE_KEY, JSON.stringify(invoices));
  } catch (error) {
    console.error('Failed to store invoices:', error);
  }
};

export function useInvoices() {
  const { address } = useAccount();
  const queryClient = useQueryClient();

  // Get all invoices where the user is either creator or recipient
  const { data: invoices = [], isLoading } = useQuery({
    queryKey: ['invoices', address],
    queryFn: () => {
      if (!address) return [];
      const allInvoices = getStoredInvoices();
      return allInvoices.filter(
        invoice => invoice.creator === address || invoice.recipient === address
      );
    },
    enabled: !!address,
  });

  // Get invoices created by the user
  const { data: createdInvoices = [] } = useQuery({
    queryKey: ['invoices', 'created', address],
    queryFn: () => {
      if (!address) return [];
      const allInvoices = getStoredInvoices();
      return allInvoices.filter(invoice => invoice.creator === address);
    },
    enabled: !!address,
  });

  // Get invoices received by the user
  const { data: receivedInvoices = [] } = useQuery({
    queryKey: ['invoices', 'received', address],
    queryFn: () => {
      if (!address) return [];
      const allInvoices = getStoredInvoices();
      return allInvoices.filter(invoice => invoice.recipient === address);
    },
    enabled: !!address,
  });

  // Create invoice mutation
  const createInvoiceMutation = useMutation({
    mutationFn: async (request: CreateInvoiceRequest) => {
      if (!address) throw new Error('Wallet not connected');
      
      const newInvoice: Invoice = {
        id: `invoice_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        creator: address,
        recipient: request.recipient,
        amount: request.amount,
        currency: request.currency,
        description: request.description,
        status: InvoiceStatus.PENDING,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        dueDate: request.dueDate,
        metadata: request.metadata,
      };

      const allInvoices = getStoredInvoices();
      allInvoices.push(newInvoice);
      storeInvoices(allInvoices);

      return newInvoice;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invoices', address] });
      queryClient.invalidateQueries({ queryKey: ['invoices', 'created', address] });
    },
  });

  // Accept invoice mutation
  const acceptInvoiceMutation = useMutation({
    mutationFn: async (invoiceId: string) => {
      const allInvoices = getStoredInvoices();
      const invoiceIndex = allInvoices.findIndex(inv => inv.id === invoiceId);
      
      if (invoiceIndex === -1) throw new Error('Invoice not found');
      if (allInvoices[invoiceIndex].recipient !== address) {
        throw new Error('Only recipient can accept invoice');
      }

      allInvoices[invoiceIndex].status = InvoiceStatus.ACCEPTED;
      allInvoices[invoiceIndex].updatedAt = Date.now();
      storeInvoices(allInvoices);

      return allInvoices[invoiceIndex];
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invoices', address] });
      queryClient.invalidateQueries({ queryKey: ['invoices', 'received', address] });
    },
  });

  // Reject invoice mutation
  const rejectInvoiceMutation = useMutation({
    mutationFn: async (invoiceId: string) => {
      const allInvoices = getStoredInvoices();
      const invoiceIndex = allInvoices.findIndex(inv => inv.id === invoiceId);
      
      if (invoiceIndex === -1) throw new Error('Invoice not found');
      if (allInvoices[invoiceIndex].recipient !== address) {
        throw new Error('Only recipient can reject invoice');
      }

      allInvoices[invoiceIndex].status = InvoiceStatus.REJECTED;
      allInvoices[invoiceIndex].updatedAt = Date.now();
      storeInvoices(allInvoices);

      return allInvoices[invoiceIndex];
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invoices', address] });
      queryClient.invalidateQueries({ queryKey: ['invoices', 'received', address] });
    },
  });

  // Pay invoice mutation (mark as paid)
  const payInvoiceMutation = useMutation({
    mutationFn: async (invoiceId: string) => {
      const allInvoices = getStoredInvoices();
      const invoiceIndex = allInvoices.findIndex(inv => inv.id === invoiceId);
      
      if (invoiceIndex === -1) throw new Error('Invoice not found');
      if (allInvoices[invoiceIndex].status !== InvoiceStatus.ACCEPTED) {
        throw new Error('Invoice must be accepted before payment');
      }

      allInvoices[invoiceIndex].status = InvoiceStatus.PAID;
      allInvoices[invoiceIndex].updatedAt = Date.now();
      storeInvoices(allInvoices);

      return allInvoices[invoiceIndex];
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invoices', address] });
      queryClient.invalidateQueries({ queryKey: ['invoices', 'received', address] });
    },
  });

  return {
    invoices,
    createdInvoices,
    receivedInvoices,
    isLoading,
    createInvoice: createInvoiceMutation.mutateAsync,
    acceptInvoice: acceptInvoiceMutation.mutateAsync,
    rejectInvoice: rejectInvoiceMutation.mutateAsync,
    payInvoice: payInvoiceMutation.mutateAsync,
    isCreating: createInvoiceMutation.isPending,
    isAccepting: acceptInvoiceMutation.isPending,
    isRejecting: rejectInvoiceMutation.isPending,
    isPaying: payInvoiceMutation.isPending,
  };
}
