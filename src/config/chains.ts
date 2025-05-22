import { mainnet, sepolia, type AppKitNetwork } from "@reown/appkit/networks";

export const ALL_CHAINS = [mainnet, sepolia] as const;

export const SUPPORTED_CHAINS: Record<number, AppKitNetwork> = import.meta.env
  .PROD
  ? {
      [mainnet.id]: mainnet,
    }
  : {
      [mainnet.id]: mainnet,
      [sepolia.id]: sepolia,
    };

export const DEFAULT_CHAIN = import.meta.env.PROD ? mainnet.id : sepolia.id;
