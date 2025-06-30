import styled from "styled-components";
import { getIpfsUrl } from "utils/ipfs";
import DocIcon from "assets/doc.svg?react";

const EscrowType = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryPurple};
`;

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  word-break: break-all;
`;

const Description = styled.p`
  word-break: break-all;
  white-space: pre-wrap;
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

interface Props {
  escrowType: string;
  title: string;
  description: string;
  agreementDocURI?: string;
}

export default function Agreement({
  escrowType,
  title,
  description,
  agreementDocURI,
}: Props) {
  return (
    <>
      <div>
        <EscrowType>{escrowType}</EscrowType>
        <Title>{title}</Title>
      </div>

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
    </>
  );
}
