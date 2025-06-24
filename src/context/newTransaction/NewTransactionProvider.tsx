import React, { useState } from "react";
import { NewTransactionContext } from "./NewTransactionContext";
import type { EscrowType } from "model/EscrowTemplate";

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
  const [deadline, setDeadline] = useState<string>();

  const resetContext = () => {
    setEscrowType("Cryptocurrency Transaction");
    setTitle("");
    setDescription("");
    setAgreementFile(undefined);
    setSenderAddress("");
    setReceiverAddress("");
    setAmount(0);
    setToken("");
    setDeadline(undefined);
  };

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
        deadline,
        setDeadline,
        resetContext,
      }}
    >
      {children}
    </NewTransactionContext.Provider>
  );
};
