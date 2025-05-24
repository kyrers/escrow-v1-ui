import {
  MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ADDRESS,
  MULTIPLE_ARBITRABLE_TRANSACTION_ADDRESS,
} from "config/contracts/addresses";
import { wagmiConfig } from "config/reown";
import { useAccount } from "wagmi";
import { multicall } from "wagmi/actions";
import { useQuery } from "@tanstack/react-query";
import { MULTIPLE_ARBITRABLE_TRANSACTION_ABI } from "config/contracts/abi/multipleArbitrableTransaction";
import { MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ABI } from "config/contracts/abi/mutlipleArbitrableTokenTransaction";

export function useTransactions() {
  const { address, chain } = useAccount();

  return useQuery({
    queryKey: ["transactions", address, chain?.id],
    queryFn: async () => {
      if (!chain || !address) return [];

      const allTxIDs = await multicall(wagmiConfig, {
        contracts: [
          {
            abi: MULTIPLE_ARBITRABLE_TRANSACTION_ABI,
            address:
              MULTIPLE_ARBITRABLE_TRANSACTION_ADDRESS[chain.id]
                .BLOCKCHAIN_NON_TECHNICAL,
            functionName: "getTransactionIDsByAddress",
            args: [address],
          },
          {
            abi: MULTIPLE_ARBITRABLE_TRANSACTION_ABI,
            address:
              MULTIPLE_ARBITRABLE_TRANSACTION_ADDRESS[chain.id].GENERAL_COURT,
            functionName: "getTransactionIDsByAddress",
            args: [address],
          },
          {
            abi: MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ABI,
            address:
              MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ADDRESS[chain.id]
                .BLOCKCHAIN_NON_TECHNICAL,
            functionName: "getTransactionIDsByAddress",
            args: [address],
          },
          {
            abi: MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ABI,
            address:
              MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ADDRESS[chain.id]
                .GENERAL_COURT,
            functionName: "getTransactionIDsByAddress",
            args: [address],
          },
        ],
      });

      const txDetails = await multicall(wagmiConfig, {
        contracts: [
          ...(allTxIDs[0].result ?? []).map((txID: bigint) => ({
            abi: MULTIPLE_ARBITRABLE_TRANSACTION_ABI,
            address:
              MULTIPLE_ARBITRABLE_TRANSACTION_ADDRESS[chain.id]
                .BLOCKCHAIN_NON_TECHNICAL,
            functionName: "transactions",
            args: [txID],
          })),
          ...(allTxIDs[1].result ?? []).map((txID: bigint) => ({
            abi: MULTIPLE_ARBITRABLE_TRANSACTION_ABI,
            address:
              MULTIPLE_ARBITRABLE_TRANSACTION_ADDRESS[chain.id].GENERAL_COURT,
            functionName: "transactions",
            args: [txID],
          })),
          ...(allTxIDs[2].result ?? []).map((txID: bigint) => ({
            abi: MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ABI,
            address:
              MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ADDRESS[chain.id]
                .BLOCKCHAIN_NON_TECHNICAL,
            functionName: "transactions",
            args: [txID],
          })),
          ...(allTxIDs[3].result ?? []).map((txID: bigint) => ({
            abi: MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ABI,
            address:
              MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ADDRESS[chain.id]
                .GENERAL_COURT,
            functionName: "transactions",
            args: [txID],
          })),
        ],
      });

      return txDetails;
    },
    enabled: !!chain && !!address,
  });
}
