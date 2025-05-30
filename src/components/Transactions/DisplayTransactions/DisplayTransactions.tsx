import { useTransactions } from "hooks/useTransactions";
import TransactionCard from "../TransactionCard/TransactionCard";
import styled from "styled-components";

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

export default function DisplayTransactions() {
  const { data: transactions, isFetching } = useTransactions();

  return isFetching ? (
    <p>Loading transactions...</p>
  ) : transactions.length === 0 ? (
    <p>No transactions found for this wallet</p>
  ) : (
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
