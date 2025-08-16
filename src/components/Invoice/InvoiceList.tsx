import { useState } from 'react';
import styled from 'styled-components';
import { useInvoices } from '../../hooks/useInvoices';
import type { Invoice } from '../../types/invoice';
import InvoiceCard from './InvoiceCard';

const PageContainer = styled.div`
  min-height: calc(100vh - 140px); /* Subtract header (60px) + footer (60px) + extra spacing (20px) */
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 40px 20px 100px 20px; /* Increased bottom padding for better footer separation */
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 16px 0;
`;

const Subtitle = styled.p`
  color: #64748b;
  font-size: 18px;
  margin: 0;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

const TabContainer = styled.div`
  display: flex;
  background: white;
  border-radius: 16px;
  padding: 8px;
  gap: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 40px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 16px 32px;
  border: none;
  border-radius: 12px;
  background: ${props => props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent'};
  color: ${props => props.active ? 'white' : '#64748b'};
  font-weight: ${props => props.active ? '700' : '600'};
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  box-shadow: ${props => props.active ? '0 4px 12px rgba(102, 126, 234, 0.3)' : 'none'};

  &:hover {
    background: ${props => props.active 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
      : 'rgba(102, 126, 234, 0.05)'
    };
    transform: ${props => props.active ? 'none' : 'translateY(-1px)'};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 80px 20px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin: 40px 0;
`;

const EmptyStateIcon = styled.div`
  font-size: 80px;
  margin-bottom: 24px;
  opacity: 0.6;
`;

const EmptyStateTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #334155;
  margin: 0 0 16px 0;
`;

const EmptyStateText = styled.p`
  font-size: 16px;
  color: #64748b;
  margin: 0;
  line-height: 1.6;
  max-width: 400px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 32px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

const StatCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  border: 1px solid #e2e8f0;
`;

const StatNumber = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: #667eea;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 80px 20px;
  color: #64748b;
  font-size: 18px;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid #e2e8f0;
  border-radius: 50%;
  border-top-color: #667eea;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 16px;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

type TabType = 'all' | 'created' | 'received';

export default function InvoiceList() {
  const { invoices, createdInvoices, receivedInvoices, isLoading } = useInvoices();
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const getCurrentInvoices = (): Invoice[] => {
    switch (activeTab) {
      case 'created':
        return createdInvoices;
      case 'received':
        return receivedInvoices;
      default:
        return invoices;
    }
  };

  const getTabCount = (tab: TabType): number => {
    switch (tab) {
      case 'created':
        return createdInvoices.length;
      case 'received':
        return receivedInvoices.length;
      default:
        return invoices.length;
    }
  };

  const currentInvoices = getCurrentInvoices();

  if (isLoading) {
    return (
      <PageContainer>
        <Container>
          <LoadingContainer>
            <LoadingSpinner />
            <div>Loading your invoices...</div>
          </LoadingContainer>
        </Container>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Container>
        <Header>
          <Title>Invoice Management</Title>
          <Subtitle>
            Track, manage, and monitor all your proforma invoices in one place
          </Subtitle>
        </Header>

        <StatsContainer>
          <StatCard>
            <StatNumber>{invoices.length}</StatNumber>
            <StatLabel>Total Invoices</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>{createdInvoices.length}</StatNumber>
            <StatLabel>Created by You</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>{receivedInvoices.length}</StatNumber>
            <StatLabel>Received</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>
              {invoices.filter(inv => inv.status === 'PAID').length}
            </StatNumber>
            <StatLabel>Paid</StatLabel>
          </StatCard>
        </StatsContainer>

        <TabContainer>
          <Tab
            active={activeTab === 'all'}
            onClick={() => setActiveTab('all')}
          >
            All Invoices ({getTabCount('all')})
          </Tab>
          <Tab
            active={activeTab === 'created'}
            onClick={() => setActiveTab('created')}
          >
            Created ({getTabCount('created')})
          </Tab>
          <Tab
            active={activeTab === 'received'}
            onClick={() => setActiveTab('received')}
          >
            Received ({getTabCount('received')})
          </Tab>
        </TabContainer>

        {currentInvoices.length === 0 ? (
          <EmptyState>
            <EmptyStateIcon>📄</EmptyStateIcon>
            <EmptyStateTitle>
              {activeTab === 'created' 
                ? 'No invoices created yet'
                : activeTab === 'received'
                ? 'No invoices received yet'
                : 'No invoices found'
              }
            </EmptyStateTitle>
            <EmptyStateText>
              {activeTab === 'created'
                ? 'Create your first invoice to get started with professional billing'
                : activeTab === 'received'
                ? 'Invoices sent to you will appear here for review and action'
                : 'Create or receive invoices to see them displayed here'
              }
            </EmptyStateText>
          </EmptyState>
        ) : (
          <Grid>
            {currentInvoices.map((invoice) => (
              <InvoiceCard key={invoice.id} invoice={invoice} />
            ))}
          </Grid>
        )}
      </Container>
    </PageContainer>
  );
}
