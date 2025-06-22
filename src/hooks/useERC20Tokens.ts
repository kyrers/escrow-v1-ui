import { useQuery } from "@tanstack/react-query";
import { ARBITRABLE_ADDRESS_LIST_ABI } from "config/contracts/abi/arbitrableAddressList";
import { ARBITRABLE_TOKEN_LIST_ABI } from "config/contracts/abi/arbitrableTokenList";
import { TOKENS_VIEW_ABI } from "config/contracts/abi/tokensView";
import {
  ERC20_BADGE_ADDRESS,
  TCR_ADDRESS,
  TOKENS_VIEW_ADDRESS,
} from "config/contracts/addresses";
import { QUERY_KEYS } from "config/queryKeys";
import { wagmiConfig } from "config/reown";
import type { ERC20Token } from "model/ERC20Token";
import { useMemo } from "react";
import { getIpfsUrl } from "utils/ipfs";
import { zeroAddress, zeroHash } from "viem";
import { useAccount } from "wagmi";
import { multicall, readContract } from "wagmi/actions";

const fetchAddresses = async (erc20BadgeAddress: `0x${string}`) => {
  const addresses: `0x${string}`[] = [];
  let lastAddress = zeroAddress as `0x${string}`;
  let hasMore = true;

  //Highly unlikely this will run more than once, nevertheless, the code is ready for it
  while (hasMore) {
    const data = await readContract(wagmiConfig, {
      address: erc20BadgeAddress,
      abi: ARBITRABLE_ADDRESS_LIST_ABI,
      functionName: "queryAddresses",
      args: [
        lastAddress,
        1000n,
        [false, true, false, false, false, false, false, false],
        true,
      ],
    });

    addresses.push(...data[0].filter((addr) => addr !== zeroAddress));
    hasMore = data[1];
    lastAddress = data[0][data[0].length - 1];
  }

  return addresses;
};

const fetchTokenIDs = async (
  tokensViewAddress: `0x${string}`,
  tcrAddress: `0x${string}`,
  addresses: `0x${string}`[]
) => {
  const tokenIDs = await readContract(wagmiConfig, {
    address: tokensViewAddress,
    abi: TOKENS_VIEW_ABI,
    functionName: "getTokensIDsForAddresses",
    args: [tcrAddress, addresses],
  });

  return tokenIDs.filter((tokenID) => tokenID !== zeroHash);
};

type TokenInfo = readonly [string, string, `0x${string}`, string, number];
const fetchTokensInfo = async (
  tcrAddress: `0x${string}`,
  tokenIDs: readonly `0x${string}`[]
) => {
  const results = await multicall(wagmiConfig, {
    contracts: tokenIDs.map((tokenID) => ({
      address: tcrAddress,
      abi: ARBITRABLE_TOKEN_LIST_ABI,
      functionName: "tokens",
      args: [tokenID],
    })),
  });

  return results
    .filter((result) => result.status === "success")
    .map((result) => result.result as unknown as TokenInfo);
};

const mapToERC20Token = (tokensInfo: readonly TokenInfo[]): ERC20Token[] => {
  if (tokensInfo.length === 0) {
    return [];
  }

  return tokensInfo.map((tokenInfo) => {
    return {
      name: tokenInfo[0],
      ticker: tokenInfo[1],
      address: tokenInfo[2],
      logoURI: getIpfsUrl(tokenInfo[3]),
      status: tokenInfo[4],
    };
  });
};

export function useERC20Tokens() {
  const { chain } = useAccount();

  const [erc20BadgeAddress, tcrAddress, tokensViewAddress] = useMemo(() => {
    return [
      ERC20_BADGE_ADDRESS[chain?.id ?? 1],
      TCR_ADDRESS[chain?.id ?? 1],
      TOKENS_VIEW_ADDRESS[chain?.id ?? 1],
    ];
  }, [chain]);

  return useQuery<ERC20Token[]>({
    queryKey: [QUERY_KEYS.erc20Tokens, chain],
    queryFn: async () => {
      //Fetch all ERC20 addresses
      const addresses = await fetchAddresses(erc20BadgeAddress);

      //Fetch all token IDs for the addresses
      const tokenIDs = await fetchTokenIDs(
        tokensViewAddress,
        tcrAddress,
        addresses
      );

      //Fetch all token info for the token IDs
      const tokensInfo = await fetchTokensInfo(tcrAddress, tokenIDs);

      //Map to usable model
      return mapToERC20Token(tokensInfo);
    },
    enabled: !!chain,
    refetchOnWindowFocus: false,
    initialData: [],
  });
}
