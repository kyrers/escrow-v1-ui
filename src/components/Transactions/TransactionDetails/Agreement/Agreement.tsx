import styled from "styled-components";
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

interface Props {
  title: string;
  description: string;
  agreementDocURI?: string;
}

export default function Agreement({
  title,
  description,
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
    </>
  );
}
