import { useParams } from "react-router";
import { type Transaction } from "model/Transaction";
import TransactionDetails from "components/Transactions/TransactionDetails/TransactionDetails";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 16px;
  align-items: center;
  overflow-y: auto;
  padding: 8px 0;
`;

//NOTE: If in dev and using the Sepolia network, you will see "Transaction not found" when trying to access this page directly (eg. pasting an url into the browser).
//This is expected behavior, as the viem client defaults to mainnet and the contracts are deployed on Sepolia for testing, so the transaction will be undefined.
//Using mainnet, in prod or dev, accessing this page directly will work.
export default function Transaction() {
  const { id, contractAddress } = useParams();
  const transactionId = BigInt(id ?? "0");

  return (
    <Container>
      <TransactionDetails
        id={transactionId}
        contractAddress={contractAddress as `0x${string}`}
      />
    </Container>
  );
}
