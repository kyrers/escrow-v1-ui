import styled from "styled-components";
import { AlertMessage, Box } from "@kleros/ui-components-library";
import TransactionOverview from "./TransactionOverview/TransactionOverview";
import { useTransactionDetails } from "hooks/useTransactionDetails";
import { BaseSkeleton } from "components/Common/Skeleton/BaseSkeleton";
import TransactionDetailsHeader from "./TransactionDetailsHeader/TransactionDetailsHeader";

const StyledSkeleton = styled(BaseSkeleton)`
  height: 100%;
  width: 80%;
  border-radius: ${({ theme }) => theme.radius.boxDefault};
  background-color: ${({ theme }) => theme.colors.mediumBlue};
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: fit-content;
  gap: 16px;
  padding: 8px 16px;
  align-self: center;
`;

const StyledHr = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.primaryBlue};
`;

interface Props {
  id: bigint;
  contractAddress: `0x${string}`;
}

export default function TransactionDetails({ id, contractAddress }: Props) {
  const { data: transaction, isFetching } = useTransactionDetails({
    id: id,
    contractAddress,
  });

  if (isFetching) {
    return <StyledSkeleton />;
  }

  if (!transaction) {
    return (
      <AlertMessage
        title="Transaction not found"
        msg="Please try again or connect to the correct network."
        variant="error"
      />
    );
  }

  return (
    <StyledBox>
      <TransactionDetailsHeader
        status={transaction.status}
        blockExplorerLink={transaction.blockExplorerLink}
        createdAt={transaction.createdAt}
      />

      <StyledHr />

      <TransactionOverview
        title={transaction.metaEvidence.title}
        description={transaction.metaEvidence.description}
        originalAmount={transaction.metaEvidence.amount}
        escrowAmount={transaction.amountInEscrow}
        ticker={transaction.metaEvidence.token.ticker}
        sender={transaction.metaEvidence.sender}
        receiver={transaction.metaEvidence.receiver}
        agreementDocURI={transaction.metaEvidence.fileURI}
      />

      <StyledHr />

      <h1>Timeline</h1>
    </StyledBox>
  );
}
