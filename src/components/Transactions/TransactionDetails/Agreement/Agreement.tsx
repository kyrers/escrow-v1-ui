import styled from "styled-components";
import { getIpfsUrl } from "utils/ipfs";
import DocIcon from "assets/doc.svg?react";

const StyledP = styled.p`
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
  description: string;
  agreementDocURI?: string;
}

export default function Agreement({ description, agreementDocURI }: Props) {
  return (
    <>
      <StyledP>Terms</StyledP>

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
