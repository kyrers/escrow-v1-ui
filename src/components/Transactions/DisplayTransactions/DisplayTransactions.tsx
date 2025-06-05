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

export default function DisplayTransactions() {
  const { data: transactions, isFetching } = useTransactions();

  return (
    <CardContainer>
      {isFetching
        ? [...Array(9)].map((_, i) => <SkeletonCard key={i} />)
        : transactions.map((transaction) => (
            <TransactionCard
              key={`${transaction.id}-${transaction.arbitrableAddress}`}
              transaction={transaction}
            />
          ))}
    </CardContainer>
  );
}
