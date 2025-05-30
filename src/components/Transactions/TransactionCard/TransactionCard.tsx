import { Card, Tag } from "@kleros/ui-components-library";
import { TransactionStatus, type Transaction } from "model/Transaction";
import styled from "styled-components";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 200px;
  overflow: hidden;

  p {
    font-size: 14px;
  }
`;

const CardEdge = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.tintPurple};
  padding: 8px;
  height: 40px;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  padding: 8px;
  height: 120px;
`;

const Title = styled.p`
  font-weight: bold;
`;

const Description = styled.p``;

const AmountAndId = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface Props {
  transaction: Transaction;
}

export default function TransactionCard({ transaction }: Props) {
  return (
    <StyledCard round hover className="w-[1/3]">
      <CardEdge>
        <Tag text={TransactionStatus[transaction.status].toString()} />
        <p>{transaction.createdAt}</p>
      </CardEdge>
      <CardBody>
        <Title>{transaction.metaEvidence.title}</Title>
        <Description>{transaction.metaEvidence.description}</Description>
        <AmountAndId>
          <p>Amount: {transaction.originalAmount}</p>
          <p>ID: {`${transaction.id}`}</p>
        </AmountAndId>
      </CardBody>
      <CardEdge>
        <p>{transaction.party}</p>
      </CardEdge>
    </StyledCard>
  );
}
