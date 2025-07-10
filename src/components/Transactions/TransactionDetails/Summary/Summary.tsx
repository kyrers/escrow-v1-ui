import styled from "styled-components";
import { StyledDisplaySmall } from "components/Common/Form/StyledDisplaySmall";
import { addressToShortString } from "utils/common";
import { formatDeadlineDate } from "utils/transaction";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center;
  }
`;

interface Props {
  originalAmount: string;
  escrowAmount: string;
  ticker: string;
  sender: string;
  receiver: string;
  deadline?: string;
}

export default function Summary({
  originalAmount,
  escrowAmount,
  ticker,
  sender,
  receiver,
  deadline,
}: Props) {
  return (
    <Container>
      <StyledDisplaySmall
        label="Original amount"
        text={`${originalAmount} ${ticker}`}
        Icon={() => <></>}
      />

      <StyledDisplaySmall
        label="Amount in escrow"
        text={`${escrowAmount} ${ticker}`}
        Icon={() => <></>}
      />

      <StyledDisplaySmall
        label="Sender"
        text={addressToShortString(sender)}
        Icon={() => <></>}
      />

      <StyledDisplaySmall
        label="Receiver"
        text={addressToShortString(receiver)}
        Icon={() => <></>}
      />

      {deadline && (
        <StyledDisplaySmall
          label="Delivery deadline (UTC)"
          text={formatDeadlineDate(new Date(deadline))}
          Icon={() => <></>}
        />
      )}
    </Container>
  );
}
