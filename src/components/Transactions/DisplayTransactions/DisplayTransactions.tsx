import { useTransactions } from "hooks/useTransactions";
import TransactionCard from "../TransactionCard/TransactionCard";
import styled from "styled-components";
import { BaseSkeleton } from "components/Common/Skeleton/BaseSkeleton";

const CardContainer = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(100%, max(312px, (100% - 16px * 2)/3)), 1fr)
  );
  align-items: center;
  gap: 16px;
`;

const SkeletonCard = styled(BaseSkeleton)`
  border-radius: ${({ theme }) => theme.radius.base};
  height: 200px;
`;

const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export default function DisplayTransactions() {
  const { data: transactions, isFetching } = useTransactions();

  if (isFetching) {
    return (
      <CardContainer>
        {[...Array(9)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </CardContainer>
    );
  }

  if (transactions.length === 0) {
    return <EmptyMessage>No transactions found for this wallet</EmptyMessage>;
  }

  return (
    <CardContainer>
      {transactions.map((transaction) => (
        <TransactionCard
          key={`${transaction.id}-${transaction.arbitrableAddress}`}
          transaction={transaction}
        />
      ))}
    </CardContainer>
  );
}
