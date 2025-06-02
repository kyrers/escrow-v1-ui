import styled from "styled-components";
import { AlertMessage } from "@kleros/ui-components-library";
import { useAccount } from "wagmi";
import DisplayTransactions from "components/Transactions/DisplayTransactions/DisplayTransactions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 16px;
  align-items: center;
  overflow-y: auto;
  padding: 8px 16px;
`;

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <Container>
      {!isConnected ? (
        <AlertMessage
          className="w-fit"
          title="Connect your wallet"
          msg="Please connect your wallet to create and view your transactions"
          variant="info"
        />
      ) : (
        <DisplayTransactions />
      )}
    </Container>
  );
}
