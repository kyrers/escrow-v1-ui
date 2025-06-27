import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import { MULTIPLE_ARBITRABLE_TRANSACTION_ABI } from "./src/config/contracts/abi/multipleArbitrableTransaction";
import { MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ABI } from "./src/config/contracts/abi/mutlipleArbitrableTokenTransaction";

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
  ],
  plugins: [react()],
});
