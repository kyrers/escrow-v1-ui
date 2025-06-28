import { useState } from "react";
import TokenSelectorModal from "./TokenSelectorModal/TokenSelectorModal";
import { useNewTransactionContext } from "context/newTransaction/useNewTransactionContext";
import { getEscrowTokens } from "config/tokens";
import { useAccount } from "wagmi";
import TokenSelectorButton from "./TokenSelectorButton/TokenSelectorButton";
import type { EscrowToken } from "model/EscrowToken";

export default function TokenSelector() {
  const { token, setToken } = useNewTransactionContext();
  const { chain } = useAccount();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const escrowTokens = getEscrowTokens(chain?.id ?? 1);

  const handleSelectToken = (token: EscrowToken) => {
    setToken(token.name);
    setIsModalOpen(false);
  };

  return (
    <>
      <TokenSelectorButton
        token={
          escrowTokens.find((item) => item.name === token) ?? escrowTokens[0]
        }
        onClick={() => setIsModalOpen(true)}
      />

      <TokenSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        handleSelectToken={handleSelectToken}
        escrowTokens={escrowTokens}
      />
    </>
  );
}
