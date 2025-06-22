import { mainnet, sepolia } from "@reown/appkit/networks";

interface Addresses {
  BLOCKCHAIN_NON_TECHNICAL: `0x${string}`;
  GENERAL_COURT: `0x${string}`;
}

export const MULTIPLE_ARBITRABLE_TRANSACTION_ADDRESS: Record<
  number,
  Addresses
> = {
  [mainnet.id]: {
    BLOCKCHAIN_NON_TECHNICAL: "0xE2Dd8CCe2c33a04215074ADb4B5820B765d8Ed9D",
    GENERAL_COURT: "0x0d67440946949fe293b45c52efd8a9b3d51e2522",
  },
  [sepolia.id]: {
    BLOCKCHAIN_NON_TECHNICAL: "0x338f1A474e0FB0ae9E913cFA3d7c6Aa19b92015B",
    GENERAL_COURT: "0x9262c1c7810571B189db83F945e7e8b67abcE1c8",
  },
};

export const MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ADDRESS: Record<
  number,
  Addresses
> = {
  [mainnet.id]: {
    BLOCKCHAIN_NON_TECHNICAL: "0xC25a0b9681ABF6F090AEd71a8c08fB564b41dab6",
    GENERAL_COURT: "0xBCf0d1AD453728F75e9cFD4358ED187598A45e6c",
  },
  [sepolia.id]: {
    BLOCKCHAIN_NON_TECHNICAL: "0x58fc7e398B4a1886695ab2C7fE7c31F49393a8c5",
    GENERAL_COURT: "0x6048002b6E93A4A5d93E902F2427D7472790aC97",
  },
};

export const TCR_ADDRESS: Record<number, `0x${string}`> = {
  [mainnet.id]: "0xebcf3bca271b26ae4b162ba560e243055af0e679",
  [sepolia.id]: "0x899B8c6fE36cbFca1e6398e33B93707fF45d6e30",
};

export const ERC20_BADGE_ADDRESS: Record<number, `0x${string}`> = {
  [mainnet.id]: "0xcb4aae35333193232421e86cd2e9b6c91f3b125f",
  [sepolia.id]: "0xa19f50646Ac4eA8181D41ad2c24CD860596e44e1",
};

export const TOKENS_VIEW_ADDRESS: Record<number, `0x${string}`> = {
  [mainnet.id]: "0xf9b9b5440340123b21bff1ddafe1ad6feb9d6e7f",
  [sepolia.id]: "0x6f9A63F3613B8dd002bd59073B23e03648eF7a0e",
};
