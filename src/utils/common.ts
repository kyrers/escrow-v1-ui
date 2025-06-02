export function addressToShortString(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
