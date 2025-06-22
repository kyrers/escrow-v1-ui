enum TokenStatus {
  Absent,
  Registered,
  RegistrationRequested,
  ClearingRequested,
}

export interface ERC20Token {
  name: string;
  ticker: string;
  address: `0x${string}`;
  logoURI: string;
  status: TokenStatus;
}
