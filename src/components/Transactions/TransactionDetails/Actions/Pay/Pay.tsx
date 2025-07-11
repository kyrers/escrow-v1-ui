import {
  AlertMessage,
  Button,
  NumberField,
} from "@kleros/ui-components-library";
import { useQueryClient } from "@tanstack/react-query";
import { StyledModal } from "components/Common/Modal/StyledModal";
import {
  useSimulateMultipleArbitrableTokenTransactionPay,
  useSimulateMultipleArbitrableTransactionPay,
  useWriteMultipleArbitrableTokenTransactionPay,
  useWriteMultipleArbitrableTransactionPay,
} from "config/contracts/generated";
import { QUERY_KEYS } from "config/queryKeys";
import { useMemo, useState } from "react";
import styled from "styled-components";
import { isUserRejectedRequestError } from "utils/common";
import { parseUnits } from "viem";
import { waitForTransactionReceipt } from "viem/actions";
import { useClient } from "wagmi";

const StyledNumberField = styled(NumberField)`
  width: 100%;
`;

const StyledP = styled.p`
  font-weight: bold;
`;

const StyledButton = styled(Button)`
  align-self: center;
`;

interface Props {
  transactionId: bigint;
  contractAddress: string;
  escrowAmount: number;
  ticker: string;
  decimals: number;
}

export default function Pay({
  transactionId,
  contractAddress,
  escrowAmount,
  ticker,
  decimals,
}: Props) {
  const queryClient = useQueryClient();
  const client = useClient();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(escrowAmount);
  const [isPaying, setIsPaying] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const transactionConfig = useMemo(() => {
    return {
      address: contractAddress as `0x${string}`,
      args: [transactionId, parseUnits(amount.toString(), decimals)],
    } as const;
  }, [transactionId, amount, decimals, contractAddress]);

  const { refetch: refetchNativeSimulateData } =
    useSimulateMultipleArbitrableTransactionPay({
      ...transactionConfig,
      query: { enabled: false }, //Only simulate when we want
    });

  const { refetch: refetchTokenSimulateData } =
    useSimulateMultipleArbitrableTokenTransactionPay({
      ...transactionConfig,
      query: { enabled: false }, //Only simulate when we want
    });

  const { writeContractAsync: payNativeTransaction } =
    useWriteMultipleArbitrableTransactionPay();
  const { writeContractAsync: payTokenTransaction } =
    useWriteMultipleArbitrableTokenTransactionPay();

  const handlePay = async () => {
    setIsError(false);

    if (!client) {
      setIsError(true);
      return;
    }

    setIsPaying(true);
    let hash;

    try {
      if (ticker === "ETH") {
        const { data: nativeSimulationData } =
          await refetchNativeSimulateData();

        if (nativeSimulationData?.request) {
          hash = await payNativeTransaction(nativeSimulationData.request);
        } else {
          setIsPaying(false);
          setIsError(true);
          return;
        }
      } else {
        const { data: tokenSimulationData } = await refetchTokenSimulateData();

        if (tokenSimulationData?.request) {
          hash = await payTokenTransaction(tokenSimulationData.request);
        } else {
          setIsPaying(false);
          setIsError(true);
          return;
        }
      }

      //Wait for the transaction confirmation before performing the details refresh
      await waitForTransactionReceipt(client, { hash: hash });

      queryClient.invalidateQueries({
        queryKey: [
          QUERY_KEYS.transactionDetails,
          transactionId.toString(),
          contractAddress,
        ],
      });
      setIsOpen(false);
      setIsPaying(false);
    } catch (error) {
      console.error(error);

      if (!isUserRejectedRequestError(error)) {
        setIsError(true);
      }

      setIsPaying(false);
    }
  };

  return (
    <>
      <StyledModal
        width="750px"
        isOpen={isOpen}
        isDismissable
        onOpenChange={() => setIsOpen(false)}
      >
        {isError && (
          <AlertMessage
            title="Error creating transaction"
            msg="Transaction simulation failed. Please verify you have enough funds to pay for gas. If the error persists, please reach out via Discord or Telegram."
            variant="error"
          />
        )}

        <StyledP>
          Current amount in escrow: {escrowAmount} {ticker}
        </StyledP>

        <p>
          If you are happy with the service or good provided, you can pay the
          total amount and complete the escrow. <br />
          Otherwise, you can make a partial payment. The amount that remains can
          still be disputed.
        </p>

        <StyledNumberField
          value={amount}
          onChange={(value) => setAmount(isNaN(value) ? 0 : value)}
          isRequired
          label="Amount to pay"
          name="amount"
          placeholder="Amount"
          validate={(value) =>
            value > 0 && value <= escrowAmount
              ? true
              : "Amount must be greater than 0, but not greater than the escrow amount."
          }
          minValue={0}
          showFieldError
          formatOptions={{
            //Prevent automatic rounding of very small amounts
            minimumFractionDigits: 0,
            maximumFractionDigits: 18,
          }}
        />

        <StyledButton
          text="Pay"
          small
          isDisabled={isPaying || amount <= 0 || amount > escrowAmount}
          isLoading={isPaying}
          onPress={handlePay}
        />
      </StyledModal>

      <Button small text="Make a payment" onPress={() => setIsOpen(true)} />
    </>
  );
}
