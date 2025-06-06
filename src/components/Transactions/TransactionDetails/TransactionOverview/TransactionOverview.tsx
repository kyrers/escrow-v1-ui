import styled from "styled-components";
import { DisplaySmall } from "@kleros/ui-components-library";
import { addressToShortString } from "utils/common";
import { getIpfsUrl } from "utils/ipfs";
import DocIcon from "assets/doc.svg?react";

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  word-break: break-all;
`;

const StyledA = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primaryBlue};
  }
`;

const Description = styled.p`
  word-break: break-all;
  white-space: pre-wrap;
`;

const DisplaySmallContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
`;

const StyledDisplaySmall = styled(DisplaySmall)`
  overflow: hidden;
  white-space: nowrap;
  height: fit-content;

  label {
    font-weight: bold;
  }
`;

interface Props {
  title: string;
  description: string;
  originalAmount: string;
  escrowAmount: string;
  ticker: string;
  sender: string;
  receiver: string;
  agreementDocURI?: string;
}

export default function TransactionOverview({
  title,
  description,
  originalAmount,
  escrowAmount,
  ticker,
  sender,
  receiver,
  agreementDocURI,
}: Props) {
  return (
    <>
      <Title>{title}</Title>

      <Description>{description}</Description>

      {agreementDocURI && (
        <StyledA
          href={getIpfsUrl(agreementDocURI)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DocIcon />
          <p>Contract details</p>
        </StyledA>
      )}

      <DisplaySmallContainer>
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
      </DisplaySmallContainer>
    </>
  );
}
