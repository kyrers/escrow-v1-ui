import { useState } from 'react';
import styled from 'styled-components';
import { useInvoices } from '../../hooks/useInvoices';
import type { CreateInvoiceRequest } from '../../types/invoice';

const PageContainer = styled.div`
  min-height: calc(100vh - 140px); /* Subtract header (60px) + footer (60px) + extra spacing (20px) */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px 100px 20px; /* Increased bottom padding for better footer separation */
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 12px 0;
`;

const Subtitle = styled.p`
  color: #64748b;
  font-size: 16px;
  margin: 0;
  line-height: 1.6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #334155;
  margin: 0;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 600;
  color: #475569;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Required = styled.span`
  color: #ef4444;
  font-size: 12px;
`;

const Input = styled.input`
  padding: 16px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: white;
  color: #334155;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const TextArea = styled.textarea`
  padding: 16px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  background: white;
  color: #334155;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const Select = styled.select`
  padding: 16px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 16px;
  background: white;
  color: #334155;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Button = styled.button<{ disabled?: boolean }>`
  padding: 18px 32px;
  background: ${props => props.disabled 
    ? 'linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%)' 
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

const Message = styled.div<{ type: 'error' | 'success' }>`
  padding: 16px 20px;
  border-radius: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${props => props.type === 'error' 
    ? 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)' 
    : 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'
  };
  color: ${props => props.type === 'error' ? '#dc2626' : '#16a34a'};
  border: 1px solid ${props => props.type === 'error' ? '#fecaca' : '#bbf7d0'};
`;

const MessageIcon = styled.span`
  font-size: 20px;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 8px;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

export default function CreateInvoiceForm() {
  const { createInvoice, isCreating } = useInvoices();
  const [formData, setFormData] = useState<CreateInvoiceRequest>({
    recipient: '',
    amount: '',
    currency: 'ETH',
    description: '',
    dueDate: undefined,
  });
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Validate form data
      if (!formData.recipient || !formData.amount || !formData.description) {
        setError('Please fill in all required fields');
        return;
      }

      if (!/^0x[a-fA-F0-9]{40}$/.test(formData.recipient)) {
        setError('Please enter a valid Ethereum address');
        return;
      }

      const amount = parseFloat(formData.amount);
      if (isNaN(amount) || amount <= 0) {
        setError('Please enter a valid amount');
        return;
      }

      await createInvoice(formData);
      
      // Reset form
      setFormData({
        recipient: '',
        amount: '',
        currency: 'ETH',
        description: '',
        dueDate: undefined,
      });
      
      setSuccess('Invoice created successfully! 🎉');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create invoice');
    }
  };

  const handleInputChange = (field: keyof CreateInvoiceRequest, value: string | number | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <PageContainer>
      <FormContainer>
        <Header>
          <Title>Create Proforma Invoice</Title>
          <Subtitle>
            Generate professional invoices for your clients with secure escrow protection
          </Subtitle>
        </Header>

        <Form onSubmit={handleSubmit}>
          <FormSection>
            <SectionTitle>
              Recipient Information
            </SectionTitle>
            
            <FormGroup>
              <Label>
                Recipient Address <Required>*</Required>
              </Label>
              <Input
                type="text"
                placeholder="0x1234...5678"
                value={formData.recipient}
                onChange={(e) => handleInputChange('recipient', e.target.value)}
                required
              />
            </FormGroup>
          </FormSection>

          <FormSection>
            <SectionTitle>
              Payment Details
            </SectionTitle>
            
            <Row>
              <FormGroup>
                <Label>
                  Amount <Required>*</Required>
                </Label>
                <Input
                  type="number"
                  step="0.000001"
                  placeholder="0.0"
                  value={formData.amount}
                  onChange={(e) => handleInputChange('amount', e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>
                  Currency
                </Label>
                <Select
                  value={formData.currency}
                  onChange={(e) => handleInputChange('currency', e.target.value)}
                >
                  <option value="ETH">ETH</option>
                  <option value="USDC">USDC</option>
                  <option value="USDT">USDT</option>
                  <option value="DAI">DAI</option>
                </Select>
              </FormGroup>
            </Row>
          </FormSection>

          <FormSection>
            <SectionTitle>
              Invoice Details
            </SectionTitle>
            
            <FormGroup>
              <Label>
                Description <Required>*</Required>
              </Label>
              <TextArea
                placeholder="Describe the goods or services being invoiced..."
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                Due Date (Optional)
              </Label>
              <Input
                type="datetime-local"
                value={formData.dueDate ? new Date(formData.dueDate).toISOString().slice(0, 16) : ''}
                onChange={(e) => handleInputChange('dueDate', e.target.value ? new Date(e.target.value).getTime() : undefined)}
              />
            </FormGroup>
          </FormSection>

          {error && (
            <Message type="error">
              <MessageIcon>⚠️</MessageIcon>
              {error}
            </Message>
          )}
          
          {success && (
            <Message type="success">
              <MessageIcon>✅</MessageIcon>
              {success}
            </Message>
          )}

          <Button type="submit" disabled={isCreating}>
            {isCreating ? (
              <>
                <LoadingSpinner />
                Creating Invoice...
              </>
            ) : (
              'Create Invoice'
            )}
          </Button>
        </Form>
      </FormContainer>
    </PageContainer>
  );
}
