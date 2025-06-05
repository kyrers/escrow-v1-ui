import { MULTIPLE_ARBITRABLE_TRANSACTION_ABI } from "config/contracts/abi/multipleArbitrableTransaction";
import { MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ABI } from "config/contracts/abi/mutlipleArbitrableTokenTransaction";
import { MULTIPLE_ARBITRABLE_TRANSACTION_ADDRESS } from "config/contracts/addresses";

export function addressToShortString(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function getBlockExplorerLink(txHash: string, chainId: number) {
  switch (chainId) {
    case 1:
      return `https://etherscan.io/tx/${txHash}`;
    case 11155111:
      return `https://sepolia.etherscan.io/tx/${txHash}`;
    default:
      return `https://etherscan.io/tx/${txHash}`;
  }
}

const HELPER_ADDRESSES = Object.values(
  MULTIPLE_ARBITRABLE_TRANSACTION_ADDRESS
).flatMap(Object.values);

export function addressToAbi(address: `0x${string}`) {
  const exists = HELPER_ADDRESSES.includes(address);
  return exists
    ? MULTIPLE_ARBITRABLE_TRANSACTION_ABI
    : MULTIPLE_ARBITRABLE_TOKEN_TRANSACTION_ABI;
}
