import { createAppKit } from "@reown/appkit/react";
import { mainnet, sepolia, type AppKitNetwork } from "@reown/appkit/networks";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

if (!import.meta.env.VITE_REOWN_PROJECT_ID) {
  throw new Error("No VITE_REOWN_PROJECT_ID environment variable");
}
const projectId = import.meta.env.VITE_REOWN_PROJECT_ID;

//The "as ..." is to fix a typescript error
const networks = [mainnet, sepolia] as [AppKitNetwork, ...AppKitNetwork[]];

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks: networks,
  defaultNetwork: mainnet,
  projectId,
});
