import { useState } from 'react';
import styled from 'styled-components';
import { useAccount } from 'wagmi';
import { useInvoices } from '../../hooks/useInvoices';
import type { Invoice } from '../../types/invoice';
import { InvoiceStatus } from '../../types/invoice';

const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => {
      switch (props.status) {
        case 'PENDING': return 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)';
        case 'ACCEPTED': return 'linear-gradient(90deg, #10b981 0%, #059669 100%)';
        case 'REJECTED': return 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)';
        case 'PAID': return 'linear-gradient(90deg, #8b5cf6 0%, #7c3aed 100%)';
        case 'EXPIRED': return 'linear-gradient(90deg, #6b7280 0%, #4b5563 100%)';
        default: return 'linear-gradient(90deg, #e5e7eb 0%, #d1d5db 100%)';
      }
    }};
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
`;

const InvoiceId = styled.div`
  font-size: 12px;
  color: #64748b;
  font-family: 'Monaco', 'Menlo', monospace;
  background: #f1f5f9;
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: 500;
`;

const StatusBadge = styled.div<{ status: InvoiceStatus }>`
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 6px;
  
  ${props => {
    switch (props.status) {
      case 'PENDING':
        return 'background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); color: #92400e; border: 1px solid #fbbf24;';
      case 'ACCEPTED':
        return 'background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); color: #065f46; border: 1px solid #10b981;';
      case 'REJECTED':
        return 'background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%); color: #991b1b; border: 1px solid #ef4444;';
      case 'PAID':
        return 'background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%); color: #5b21b6; border: 1px solid #8b5cf6;';
      case 'EXPIRED':
        return 'background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); color: #374151; border: 1px solid #6b7280;';
      default:
        return 'background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); color: #475569; border: 1px solid #cbd5e1;';
    }
  }}
`;

const StatusIcon = styled.span`
  font-size: 14px;
`;

const Amount = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CurrencyIcon = styled.span`
  font-size: 24px;
  opacity: 0.7;
`;

const Description = styled.div`
  color: #475569;
  margin-bottom: 24px;
  line-height: 1.6;
  font-size: 16px;
  background: #f8fafc;
  padding: 16px;
  border-radius: 12px;
  border-left: 4px solid #667eea;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 28px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 16px;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const DetailLabel = styled.span`
  color: #64748b;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const DetailValue = styled.span`
  color: #1e293b;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 14px;
  word-break: break-all;
  font-weight: 500;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Button = styled.button<{ variant: 'primary' | 'secondary' | 'danger' | 'success'; disabled?: boolean }>`
  padding: 14px 24px;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  flex: 1;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background: ${props.disabled ? '#cbd5e1' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
          color: white;
          box-shadow: ${props.disabled ? 'none' : '0 4px 12px rgba(102, 126, 234, 0.3)'};
        `;
      case 'secondary':
        return `
          background: ${props.disabled ? '#cbd5e1' : 'linear-gradient(135deg, #64748b 0%, #475569 100%)'};
          color: white;
          box-shadow: ${props.disabled ? 'none' : '0 4px 12px rgba(100, 116, 139, 0.3)'};
        `;
      case 'danger':
        return `
          background: ${props.disabled ? '#cbd5e1' : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'};
          color: white;
          box-shadow: ${props.disabled ? 'none' : '0 4px 12px rgba(239, 68, 68, 0.3)'};
        `;
      case 'success':
        return `
          background: ${props.disabled ? '#cbd5e1' : 'linear-gradient(135deg, #10b981 0%, #059669 100%)'};
          color: white;
          box-shadow: ${props.disabled ? 'none' : '0 4px 12px rgba(16, 185, 129, 0.3)'};
        `;
      default:
        return '';
    }
  }}

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${props => {
      switch (props.variant) {
        case 'primary': return '0 8px 20px rgba(102, 126, 234, 0.4)';
        case 'secondary': return '0 8px 20px rgba(100, 116, 139, 0.4)';
        case 'danger': return '0 8px 20px rgba(239, 68, 68, 0.4)';
        case 'success': return '0 8px 20px rgba(16, 185, 129, 0.4)';
        default: return '0 8px 20px rgba(0, 0, 0, 0.2)';
      }
    }};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

const ButtonIcon = styled.span`
  font-size: 16px;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const formatAddress = (address: string): string => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const formatDateTime = (timestamp: number): string => {
  return new Date(timestamp).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const getStatusIcon = (status: InvoiceStatus): string => {
  switch (status) {
    case 'PENDING': return '⏳';
    case 'ACCEPTED': return '✅';
    case 'REJECTED': return '❌';
    case 'PAID': return '💰';
    case 'EXPIRED': return '⏰';
    default: return '📄';
  }
};

const getCurrencyIcon = (currency: string): string => {
  switch (currency) {
    case 'ETH': return 'Ξ';
    case 'USDC': return '💵';
    case 'USDT': return '💵';
    case 'DAI': return '💵';
    default: return '💵';
  }
};

interface InvoiceCardProps {
  invoice: Invoice;
}

export default function InvoiceCard({ invoice }: InvoiceCardProps) {
  const { address } = useAccount();
  const { acceptInvoice, rejectInvoice, payInvoice, isAccepting, isRejecting, isPaying } = useInvoices();
  const [isProcessing, setIsProcessing] = useState(false);

  const isCreator = address === invoice.creator;
  const isRecipient = address === invoice.recipient;
  const canAccept = isRecipient && invoice.status === InvoiceStatus.PENDING;
  const canReject = isRecipient && invoice.status === InvoiceStatus.PENDING;
  const canPay = isRecipient && invoice.status === InvoiceStatus.ACCEPTED;

  const handleAccept = async () => {
    if (!canAccept) return;
    setIsProcessing(true);
    try {
      await acceptInvoice(invoice.id);
    } catch (error) {
      console.error('Failed to accept invoice:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReject = async () => {
    if (!canReject) return;
    setIsProcessing(true);
    try {
      await rejectInvoice(invoice.id);
    } catch (error) {
      console.error('Failed to reject invoice:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePay = async () => {
    if (!canPay) return;
    setIsProcessing(true);
    try {
      await payInvoice(invoice.id);
    } catch (error) {
      console.error('Failed to pay invoice:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card status={invoice.status}>
      <Header>
        <InvoiceId>{invoice.id.slice(0, 20)}...</InvoiceId>
        <StatusBadge status={invoice.status}>
          <StatusIcon>{getStatusIcon(invoice.status)}</StatusIcon>
          {invoice.status}
        </StatusBadge>
      </Header>

      <Amount>
        {invoice.amount} {invoice.currency}
        <CurrencyIcon>{getCurrencyIcon(invoice.currency)}</CurrencyIcon>
      </Amount>

      <Description>{invoice.description}</Description>

      <Details>
        <DetailItem>
          <DetailLabel>From</DetailLabel>
          <DetailValue>{formatAddress(invoice.creator)}</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>To</DetailLabel>
          <DetailValue>{formatAddress(invoice.recipient)}</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>Created</DetailLabel>
          <DetailValue>{formatDate(invoice.createdAt)}</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>Updated</DetailLabel>
          <DetailValue>{formatDate(invoice.updatedAt)}</DetailValue>
        </DetailItem>
        {invoice.dueDate && (
          <DetailItem>
            <DetailLabel>Due Date</DetailLabel>
            <DetailValue>{formatDateTime(invoice.dueDate)}</DetailValue>
          </DetailItem>
        )}
      </Details>

      <Actions>
        {canAccept && (
          <Button
            variant="success"
            onClick={handleAccept}
            disabled={isProcessing || isAccepting}
          >
            {isAccepting ? (
              <>
                <LoadingSpinner />
                Accepting...
              </>
            ) : (
              <>
                <ButtonIcon>✅</ButtonIcon>
                Accept
              </>
            )}
          </Button>
        )}
        
        {canReject && (
          <Button
            variant="danger"
            onClick={handleReject}
            disabled={isProcessing || isRejecting}
          >
            {isRejecting ? (
              <>
                <LoadingSpinner />
                Rejecting...
              </>
            ) : (
              <>
                <ButtonIcon>❌</ButtonIcon>
                Reject
              </>
            )}
          </Button>
        )}
        
        {canPay && (
          <Button
            variant="primary"
            onClick={handlePay}
            disabled={isProcessing || isPaying}
          >
            {isPaying ? (
              <>
                <LoadingSpinner />
                Processing...
              </>
            ) : (
              <>
                <ButtonIcon>💰</ButtonIcon>
                Pay
              </>
            )}
          </Button>
        )}
        
        {!canAccept && !canReject && !canPay && (
          <Button variant="secondary" disabled>
            {isCreator ? 'Waiting for response' : 'No actions available'}
          </Button>
        )}
      </Actions>
    </Card>
  );
}
