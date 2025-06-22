import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import { MULTIPLE_ARBITRABLE_TRANSACTION_ABI } from "./src/config/contracts/abi/multipleArbitrableTransaction";
import { MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ABI } from "./src/config/contracts/abi/mutlipleArbitrableTokenTransaction";
import { ARBITRABLE_ADDRESS_LIST_ABI } from "./src/config/contracts/abi/arbitrableAddressList";
import { ARBITRABLE_TOKEN_LIST_ABI } from "./src/config/contracts/abi/arbitrableTokenList";
import { TOKENS_VIEW_ABI } from "./src/config/contracts/abi/tokensView";

export default defineConfig({
  out: "src/config/contracts/generated.ts",
  contracts: [
    {
      name: "MultipleArbitrableTransaction",
      abi: MULTIPLE_ARBITRABLE_TRANSACTION_ABI,
    },
    {
      name: "MultipleArbitrableTokenTransaction",
      abi: MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ABI,
    },
    {
      name: "ArbitrableAddressList",
      abi: ARBITRABLE_ADDRESS_LIST_ABI,
    },
    {
      name: "ArbitrableTokenList",
      abi: ARBITRABLE_TOKEN_LIST_ABI,
    },
    {
      name: "TokensView",
      abi: TOKENS_VIEW_ABI,
    },
  ],
  plugins: [react()],
});
