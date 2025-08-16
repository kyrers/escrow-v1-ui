import { useTransactions } from "hooks/useTransactions";
import { Link } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 100px 24px; /* Increased bottom padding for better footer separation */
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #333;
  margin-bottom: 24px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #666;
  margin-bottom: 48px;
  line-height: 1.6;
`;

const Actions = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
`;

const ActionButton = styled(Link)`
  display: inline-block;
  padding: 16px 32px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &.secondary {
    background: #6c757d;
    
    &:hover {
      background: #545b62;
    }
  }
`;

const Features = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
`;

const Feature = styled.div`
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const FeatureIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

export default function Home() {
  const { data: transactions } = useTransactions();
  console.log("## transactions: ", transactions);

  return (
    <Container>
      <Title>Escrow V1</Title>
      <Subtitle>
        Secure, transparent, and efficient escrow services with proforma invoice management.
        Create, manage, and track invoices with ease.
      </Subtitle>

      <Actions>
        <ActionButton to="/invoices/create">
          Create Invoice
        </ActionButton>
        <ActionButton to="/invoices" className="secondary">
          View Invoices
        </ActionButton>
      </Actions>

      <Features>
        <Feature>
          <FeatureIcon>📄</FeatureIcon>
          <FeatureTitle>Proforma Invoices</FeatureTitle>
          <FeatureDescription>
            Create professional invoices for goods and services. Set amounts, due dates, and track payment status.
          </FeatureDescription>
        </Feature>

        <Feature>
          <FeatureIcon>✅</FeatureIcon>
          <FeatureTitle>Accept or Reject</FeatureTitle>
          <FeatureDescription>
            Recipients can review invoices and choose to accept or reject them before payment.
          </FeatureDescription>
        </Feature>

        <Feature>
          <FeatureIcon>💰</FeatureIcon>
          <FeatureTitle>Secure Payments</FeatureTitle>
          <FeatureDescription>
            Once accepted, invoices can be paid securely through the escrow system.
          </FeatureDescription>
        </Feature>

        <Feature>
          <FeatureIcon>📊</FeatureIcon>
          <FeatureTitle>Track Everything</FeatureTitle>
          <FeatureDescription>
            Monitor invoice status, payment history, and transaction details in real-time.
          </FeatureDescription>
        </Feature>
      </Features>
    </Container>
  );
}
