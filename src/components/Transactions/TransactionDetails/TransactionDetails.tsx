import styled from "styled-components";
import {
  AlertMessage,
  Box,
  CustomTimeline,
} from "@kleros/ui-components-library";
import Agreement from "./Agreement/Agreement";
import { useTransactionDetails } from "hooks/useTransactionDetails";
import { BaseSkeleton } from "components/Common/Skeleton/BaseSkeleton";
import Header from "./Header/Header";
import { useMemo } from "react";
import Summary from "./Summary/Summary";
import { getIpfsUrl } from "utils/ipfs";

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

const StyledA = styled.a`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondaryText};

  &:hover {
    text-decoration: underline;
  }
`;

type TimelineItems = React.ComponentProps<typeof CustomTimeline>["items"];
const StyledTimeline = styled(CustomTimeline)`
  align-self: center;
`;

const TimelinePartyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.secondaryText};
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

  //This can be simplified if the CustomTimeline component is updated and no longer expects a tuple
  const timelineItems = useMemo<TimelineItems>(() => {
    if (!transaction) {
      return [
        {
          title: "No timeline available",
          subtitle: "",
          party: "",
        },
      ];
    }

    const items = transaction.timeline.map((event) => ({
      title: event.title,
      subtitle: event.date,
      party: (
        <TimelinePartyContainer>
          <StyledA href={event.txURL} target="_blank" rel="noopener noreferrer">
            View transaction
          </StyledA>

          {event.evidenceURI && (
            <>
              <StyledSpan>|</StyledSpan>
              <StyledA
                href={getIpfsUrl(event.evidenceURI)}
                target="_blank"
                rel="noopener noreferrer"
              >
                View evidence
              </StyledA>
            </>
          )}
        </TimelinePartyContainer>
      ),
    }));

    return [...items] as TimelineItems;
  }, [transaction]);

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
      <Header
        status={transaction.status}
        blockExplorerLink={transaction.blockExplorerLink}
        createdAt={transaction.createdAt}
      />

      <StyledHr />

      <Agreement
        title={transaction.metaEvidence.title}
        description={transaction.metaEvidence.description}
        agreementDocURI={transaction.metaEvidence.fileURI}
      />

      <StyledHr />

      <Summary
        originalAmount={transaction.metaEvidence.amount}
        escrowAmount={transaction.amountInEscrow}
        ticker={transaction.metaEvidence.token?.ticker ?? "ETH"}
        sender={transaction.metaEvidence.sender}
        receiver={transaction.metaEvidence.receiver}
      />

      <StyledTimeline items={timelineItems} />
    </StyledBox>
  );
}
