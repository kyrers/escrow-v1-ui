import type { EscrowType } from "model/EscrowTemplate";
import type { EscrowToken } from "model/EscrowToken";
import { createContext } from "react";

interface INewTransactionContext {
  escrowType: EscrowType;
  setEscrowType: (type: EscrowType) => void;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  agreementFile: File | undefined;
  setAgreementFile: (agreementFile: File | undefined) => void;
  senderAddress: string;
  setSenderAddress: (address: string) => void;
  receiverAddress: string;
  setReceiverAddress: (address: string) => void;
  amount: number;
  setAmount: (amount: number) => void;
  token: string;
  setToken: (token: string) => void;
  userAddedTokens: EscrowToken[];
  setUserAddedTokens: (tokens: EscrowToken[]) => void;
  deadline: string | undefined;
  setDeadline: (deadline: string) => void;
  resetContext: () => void;
}

export const NewTransactionContext = createContext<INewTransactionContext>({
  escrowType: "Cryptocurrency Transaction",
  setEscrowType: () => {},
  title: "",
  setTitle: () => {},
  description: "",
  setDescription: () => {},
  agreementFile: undefined,
  setAgreementFile: () => {},
  senderAddress: "",
  setSenderAddress: () => {},
  receiverAddress: "",
  setReceiverAddress: () => {},
  amount: 0,
  setAmount: () => {},
  token: "",
  setToken: () => {},
  userAddedTokens: [],
  setUserAddedTokens: () => {},
  deadline: "",
  setDeadline: () => {},
  resetContext: () => {},
});
