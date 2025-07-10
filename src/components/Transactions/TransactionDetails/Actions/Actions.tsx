import { type Transaction, TransactionStatus } from "model/Transaction";
import Pay from "./Pay/Pay";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

interface Props {
  transaction: Transaction;
  isBuyer: boolean;
}

export default function Actions({ transaction, isBuyer }: Props) {
  const currentTime = Date.now() / 1000;
  const isInBufferPeriod =
    currentTime > transaction.timeoutWithoutBuffer &&
    currentTime <= transaction.metaEvidence.timeout;
  const hasTimedOut = currentTime > transaction.metaEvidence.timeout;

  //Show pay button to the buyer if the transaction is not in dispute, not in buffer period, and not timed out
  const showPayButton =
    isBuyer &&
    transaction.status === TransactionStatus.NoDispute &&
    !isInBufferPeriod &&
    !hasTimedOut;

  return (
    <Container>
      {showPayButton && (
        <Pay
          transactionId={transaction.id}
          contractAddress={transaction.arbitrableAddress}
          escrowAmount={Number(transaction.amountInEscrow)}
          ticker={transaction.metaEvidence.token?.ticker ?? "ETH"}
          decimals={Number(transaction.metaEvidence.token?.decimals ?? 18)}
        />
      )}
    </Container>
  );
}
