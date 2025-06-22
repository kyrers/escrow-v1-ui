import { type ERC20Token } from "model/ERC20Token";
import { zeroAddress } from "viem";
import ETH_LOGO from "assets/eth.png";

export const ETH_TOKEN: ERC20Token = {
  name: "Ethereum",
  ticker: "ETH",
  address: zeroAddress,
  logoURI: ETH_LOGO,
  status: 1,
};
