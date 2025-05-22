import { createAppKit } from "@reown/appkit/react";
import { type AppKitNetwork } from "@reown/appkit/networks";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { ALL_CHAINS, DEFAULT_CHAIN, SUPPORTED_CHAINS } from "./chains";
import { mainnet } from "@reown/appkit/networks";

if (!import.meta.env.VITE_REOWN_PROJECT_ID) {
  throw new Error("No VITE_REOWN_PROJECT_ID environment variable");
}
const projectId = import.meta.env.VITE_REOWN_PROJECT_ID;

//The "as ..." is to fix a typescript error
//Use mainnet in production, otherwise use all chains
const networks = import.meta.env.PROD
  ? ([mainnet] as [AppKitNetwork, ...AppKitNetwork[]])
  : ([...ALL_CHAINS] as [AppKitNetwork, ...AppKitNetwork[]]);

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks: networks,
  defaultNetwork: SUPPORTED_CHAINS[DEFAULT_CHAIN],
  projectId,
});
