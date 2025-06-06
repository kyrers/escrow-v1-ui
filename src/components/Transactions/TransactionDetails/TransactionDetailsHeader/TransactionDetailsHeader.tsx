import styled from "styled-components";
import { TransactionStatusTag } from "components/Transactions/TransactionStatusTag/TransactionStatusTag";
import EtherscanIcon from "assets/etherscan.svg?react";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
    gap: 8px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BlockExplorerLink = styled.a`
  &:hover {
    opacity: 0.8;
  }
`;

interface Props {
  status: string;
  blockExplorerLink: string;
  createdAt: string;
}

export default function TransactionDetailsHeader({
  status,
  blockExplorerLink,
  createdAt,
}: Props) {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <TransactionStatusTag active status={status} text={status} />

        <BlockExplorerLink
          target="_blank"
          rel="noopener noreferrer"
          href={blockExplorerLink}
        >
          <EtherscanIcon />
        </BlockExplorerLink>
      </HeaderLeft>

      <p>{createdAt}</p>
    </HeaderContainer>
  );
}
