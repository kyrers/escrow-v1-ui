import { Modal, Searchbar } from "@kleros/ui-components-library";
import { mobileResponsive } from "components/CreateTransactionWizard/StyledForm/StyledForm";
import type { EscrowToken } from "model/EscrowToken";
import { useMemo, useState } from "react";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radius.boxDefault};
  overflow-y: auto;

  ${mobileResponsive}
`;

const StyledSearchbar = styled(Searchbar)`
  width: 100%;
`;

const ItemsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
`;

const StyledP = styled.p`
  font-weight: bold;
`;

const TokenItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 16px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.base};

  &:hover {
    background-color: ${({ theme }) => theme.colors.stroke};
    opacity: 0.8;
  }
`;

interface Props {
  escrowTokens: EscrowToken[];
  isOpen: boolean;
  onClose: () => void;
  handleSelectToken: (token: EscrowToken) => void;
}

export default function TokenSelectorModal({
  escrowTokens,
  isOpen,
  onClose,
  handleSelectToken,
}: Props) {
  const [search, setSearch] = useState<string>("");

  //Allow users to filter tokens by name or symbol
  const filteredTokens = useMemo(() => {
    if (!search) return escrowTokens;

    const searchLower = search.toLowerCase();
    return escrowTokens.filter(
      (token) =>
        token.name.toLowerCase().includes(searchLower) ||
        token.ticker.toLowerCase().includes(searchLower)
    );
  }, [escrowTokens, search]);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSearch("");
    }

    onClose();
  };

  return (
    <StyledModal isOpen={isOpen} isDismissable onOpenChange={handleOpenChange}>
      <StyledP>Select a token</StyledP>
      <StyledSearchbar
        aria-label="Search or paste an address"
        placeholder="Search or paste an address"
        value={search}
        onChange={(value) => setSearch(value)}
      />
      <ItemsContainer>
        {filteredTokens.map((token) => (
          <TokenItem
            key={token.address}
            onClick={() => handleSelectToken(token)}
          >
            <img src={token.logo} alt={token.name} width={24} height={24} />
            <p>{token.ticker}</p>
          </TokenItem>
        ))}
      </ItemsContainer>
    </StyledModal>
  );
}
