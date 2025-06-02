import { Card, Tag } from "@kleros/ui-components-library";
import { type Transaction } from "model/Transaction";
import styled from "styled-components";
import { addressToShortString } from "utils/common";

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

const StatusTag = styled(Tag)<{ status: string }>`
  --status-color: ${({ theme, status }) =>
    status === "Completed"
      ? theme.colors.success
      : status === "Disputed"
      ? theme.colors.error
      : theme.colors.warning};

  pointer-events: none;
  border-color: var(--status-color);

  p {
    font-weight: bold;
    color: var(--status-color);
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  height: 120px;
`;

const Title = styled.p`
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Description = styled.p`
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const AmountTag = styled(Tag)`
  pointer-events: none;
  text-transform: capitalize;
  font-weight: bold;
`;

interface Props {
  transaction: Transaction;
}

export default function TransactionCard({ transaction }: Props) {
  return (
    <StyledCard round hover className="w-[1/3]">
      <CardEdge>
        <StatusTag
          active
          status={transaction.status}
          text={transaction.status}
        />
        <AmountTag
          active
          text={`${transaction.party}: ${transaction.originalAmount} ${transaction.metaEvidence.token.ticker}`}
        />
      </CardEdge>
      <CardBody>
        <Title>{transaction.metaEvidence.title}</Title>
        <Description>{transaction.metaEvidence.description}</Description>
      </CardBody>
      <CardEdge>
        <Tag text={addressToShortString(transaction.otherParty)} />
        <p>{transaction.createdAt}</p>
      </CardEdge>
    </StyledCard>
  );
}
