import React, { useEffect, useState } from "react";
import { NewTransactionContext } from "./NewTransactionContext";
import type { EscrowType } from "model/EscrowTemplate";
import type { EscrowToken } from "model/EscrowToken";
import { useAccount } from "wagmi";

export const NewTransactionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [escrowType, setEscrowType] = useState<EscrowType>(
    "Cryptocurrency Transaction"
  );
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [agreementFile, setAgreementFile] = useState<File>();
  const [senderAddress, setSenderAddress] = useState<string>("");
  const [receiverAddress, setReceiverAddress] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [token, setToken] = useState<string>("");
  const [userAddedTokens, setUserAddedTokens] = useState<EscrowToken[]>([]);
  const [deadline, setDeadline] = useState<string>();
  const { chain } = useAccount();

  const resetContext = () => {
    setEscrowType("Cryptocurrency Transaction");
    setTitle("");
    setDescription("");
    setAgreementFile(undefined);
    setSenderAddress("");
    setReceiverAddress("");
    setAmount(0);
    setToken("");
    setUserAddedTokens([]);
    setDeadline(undefined);
  };

  useEffect(() => {
    setUserAddedTokens([]);
  }, [chain?.id]);

  return (
    <NewTransactionContext.Provider
      value={{
        escrowType,
        setEscrowType,
        title,
        setTitle,
        description,
        setDescription,
        agreementFile,
        setAgreementFile,
        senderAddress,
        setSenderAddress,
        receiverAddress,
        setReceiverAddress,
        amount,
        setAmount,
        token,
        setToken,
        userAddedTokens,
        setUserAddedTokens,
        deadline,
        setDeadline,
        resetContext,
      }}
    >
      {children}
    </NewTransactionContext.Provider>
  );
};
