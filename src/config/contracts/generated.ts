import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from "wagmi/codegen";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ArbitrableAddressList
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const arbitrableAddressListAbi = [
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "challengePeriodDuration",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "governor",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "arbitratorExtraData",
    outputs: [{ name: "", type: "bytes" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_sharedStakeMultiplier", type: "uint256" }],
    name: "changeSharedStakeMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "loserStakeMultiplier",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "countByStatus",
    outputs: [
      { name: "absent", type: "uint256" },
      { name: "registered", type: "uint256" },
      { name: "registrationRequest", type: "uint256" },
      { name: "clearingRequest", type: "uint256" },
      { name: "challengedRegistrationRequest", type: "uint256" },
      { name: "challengedClearingRequest", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_disputeID", type: "uint256" },
      { name: "_ruling", type: "uint256" },
    ],
    name: "rule",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "challengerBaseDeposit",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_requesterBaseDeposit", type: "uint256" }],
    name: "changeRequesterBaseDeposit",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "sharedStakeMultiplier",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_address", type: "address" },
      { name: "_evidence", type: "string" },
    ],
    name: "submitEvidence",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "arbitrator",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "metaEvidenceUpdates",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [
      { name: "_address", type: "address" },
      { name: "_request", type: "uint256" },
      { name: "_round", type: "uint256" },
      { name: "_contributor", type: "address" },
    ],
    name: "getContributions",
    outputs: [{ name: "contributions", type: "uint256[3]" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [
      { name: "_address", type: "address" },
      { name: "_request", type: "uint256" },
    ],
    name: "getRequestInfo",
    outputs: [
      { name: "disputed", type: "bool" },
      { name: "disputeID", type: "uint256" },
      { name: "submissionTime", type: "uint256" },
      { name: "resolved", type: "bool" },
      { name: "parties", type: "address[3]" },
      { name: "numberOfRounds", type: "uint256" },
      { name: "ruling", type: "uint8" },
      { name: "arbitrator", type: "address" },
      { name: "arbitratorExtraData", type: "bytes" },
    ],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_address", type: "address" }],
    name: "executeRequest",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: true,
    type: "function",
    inputs: [{ name: "_address", type: "address" }],
    name: "requestStatusChange",
    outputs: [],
    stateMutability: "payable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "winnerStakeMultiplier",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [{ name: "", type: "address" }],
    name: "addresses",
    outputs: [{ name: "status", type: "uint8" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_beneficiary", type: "address" },
      { name: "_address", type: "address" },
      { name: "_cursor", type: "uint256" },
      { name: "_count", type: "uint256" },
      { name: "_roundCursor", type: "uint256" },
      { name: "_roundCount", type: "uint256" },
    ],
    name: "batchRequestWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: true,
    type: "function",
    inputs: [
      { name: "_address", type: "address" },
      { name: "_side", type: "uint8" },
    ],
    name: "fundAppeal",
    outputs: [],
    stateMutability: "payable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_beneficiary", type: "address" },
      { name: "_address", type: "address" },
      { name: "_request", type: "uint256" },
      { name: "_cursor", type: "uint256" },
      { name: "_count", type: "uint256" },
    ],
    name: "batchRoundWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "requesterBaseDeposit",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_loserStakeMultiplier", type: "uint256" }],
    name: "changeLoserStakeMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "addressCount",
    outputs: [{ name: "count", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_winnerStakeMultiplier", type: "uint256" }],
    name: "changeWinnerStakeMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [{ name: "", type: "uint256" }],
    name: "addressList",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [
      { name: "_address", type: "address" },
      { name: "_beneficiary", type: "address" },
      { name: "_request", type: "uint256" },
    ],
    name: "amountWithdrawable",
    outputs: [{ name: "total", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_arbitrator", type: "address" },
      { name: "_arbitratorExtraData", type: "bytes" },
    ],
    name: "changeArbitrator",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_beneficiary", type: "address" },
      { name: "_address", type: "address" },
      { name: "_request", type: "uint256" },
      { name: "_round", type: "uint256" },
    ],
    name: "withdrawFeesAndRewards",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [{ name: "_address", type: "bytes32" }],
    name: "isPermitted",
    outputs: [{ name: "allowed", type: "bool" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [
      { name: "_cursor", type: "address" },
      { name: "_count", type: "uint256" },
      { name: "_filter", type: "bool[8]" },
      { name: "_oldestFirst", type: "bool" },
    ],
    name: "queryAddresses",
    outputs: [
      { name: "values", type: "address[]" },
      { name: "hasMore", type: "bool" },
    ],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [
      { name: "", type: "address" },
      { name: "", type: "uint256" },
    ],
    name: "arbitratorDisputeIDToAddress",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_challengePeriodDuration", type: "uint256" }],
    name: "changeTimeToChallenge",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "MULTIPLIER_DIVISOR",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_registrationMetaEvidence", type: "string" },
      { name: "_clearingMetaEvidence", type: "string" },
    ],
    name: "changeMetaEvidence",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_challengerBaseDeposit", type: "uint256" }],
    name: "changeChallengerBaseDeposit",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: true,
    type: "function",
    inputs: [
      { name: "_address", type: "address" },
      { name: "_evidence", type: "string" },
    ],
    name: "challengeRequest",
    outputs: [],
    stateMutability: "payable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_governor", type: "address" }],
    name: "changeGovernor",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [{ name: "_address", type: "address" }],
    name: "getAddressInfo",
    outputs: [
      { name: "status", type: "uint8" },
      { name: "numberOfRequests", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [
      { name: "_address", type: "address" },
      { name: "_request", type: "uint256" },
      { name: "_round", type: "uint256" },
    ],
    name: "getRoundInfo",
    outputs: [
      { name: "appealed", type: "bool" },
      { name: "paidFees", type: "uint256[3]" },
      { name: "hasPaid", type: "bool[3]" },
      { name: "feeRewards", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    payable: false,
    type: "constructor",
    inputs: [
      { name: "_arbitrator", type: "address" },
      { name: "_arbitratorExtraData", type: "bytes" },
      { name: "_registrationMetaEvidence", type: "string" },
      { name: "_clearingMetaEvidence", type: "string" },
      { name: "_governor", type: "address" },
      { name: "_requesterBaseDeposit", type: "uint256" },
      { name: "_challengerBaseDeposit", type: "uint256" },
      { name: "_challengePeriodDuration", type: "uint256" },
      { name: "_sharedStakeMultiplier", type: "uint256" },
      { name: "_winnerStakeMultiplier", type: "uint256" },
      { name: "_loserStakeMultiplier", type: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_address", type: "address", indexed: true },
      { name: "_requester", type: "address", indexed: true },
    ],
    name: "AddressSubmitted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_address", type: "address", indexed: true },
      { name: "_registrationRequest", type: "bool", indexed: false },
    ],
    name: "RequestSubmitted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_requester", type: "address", indexed: true },
      { name: "_challenger", type: "address", indexed: true },
      { name: "_address", type: "address", indexed: true },
      { name: "_status", type: "uint8", indexed: false },
      { name: "_disputed", type: "bool", indexed: false },
      { name: "_appealed", type: "bool", indexed: false },
    ],
    name: "AddressStatusChange",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_address", type: "address", indexed: true },
      { name: "_contributor", type: "address", indexed: true },
      { name: "_request", type: "uint256", indexed: true },
      { name: "_round", type: "uint256", indexed: false },
      { name: "_value", type: "uint256", indexed: false },
    ],
    name: "RewardWithdrawal",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_metaEvidenceID", type: "uint256", indexed: true },
      { name: "_evidence", type: "string", indexed: false },
    ],
    name: "MetaEvidence",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_arbitrator", type: "address", indexed: true },
      { name: "_disputeID", type: "uint256", indexed: true },
      { name: "_metaEvidenceID", type: "uint256", indexed: false },
      { name: "_evidenceGroupID", type: "uint256", indexed: false },
    ],
    name: "Dispute",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_arbitrator", type: "address", indexed: true },
      { name: "_evidenceGroupID", type: "uint256", indexed: true },
      { name: "_party", type: "address", indexed: true },
      { name: "_evidence", type: "string", indexed: false },
    ],
    name: "Evidence",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_arbitrator", type: "address", indexed: true },
      { name: "_disputeID", type: "uint256", indexed: true },
      { name: "_ruling", type: "uint256", indexed: false },
    ],
    name: "Ruling",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ArbitrableTokenList
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const arbitrableTokenListAbi = [
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "challengePeriodDuration",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "governor",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "arbitratorExtraData",
    outputs: [{ name: "", type: "bytes" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [
      { name: "_tokenID", type: "bytes32" },
      { name: "_beneficiary", type: "address" },
      { name: "_request", type: "uint256" },
    ],
    name: "amountWithdrawable",
    outputs: [{ name: "total", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_sharedStakeMultiplier", type: "uint256" }],
    name: "changeSharedStakeMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_beneficiary", type: "address" },
      { name: "_tokenID", type: "bytes32" },
      { name: "_cursor", type: "uint256" },
      { name: "_count", type: "uint256" },
      { name: "_roundCursor", type: "uint256" },
      { name: "_roundCount", type: "uint256" },
    ],
    name: "batchRequestWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "loserStakeMultiplier",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "countByStatus",
    outputs: [
      { name: "absent", type: "uint256" },
      { name: "registered", type: "uint256" },
      { name: "registrationRequest", type: "uint256" },
      { name: "clearingRequest", type: "uint256" },
      { name: "challengedRegistrationRequest", type: "uint256" },
      { name: "challengedClearingRequest", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: true,
    type: "function",
    inputs: [
      { name: "_tokenID", type: "bytes32" },
      { name: "_side", type: "uint8" },
    ],
    name: "fundAppeal",
    outputs: [],
    stateMutability: "payable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [{ name: "_tokenID", type: "bytes32" }],
    name: "getTokenInfo",
    outputs: [
      { name: "name", type: "string" },
      { name: "ticker", type: "string" },
      { name: "addr", type: "address" },
      { name: "symbolMultihash", type: "string" },
      { name: "status", type: "uint8" },
      { name: "numberOfRequests", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_disputeID", type: "uint256" },
      { name: "_ruling", type: "uint256" },
    ],
    name: "rule",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "challengerBaseDeposit",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_requesterBaseDeposit", type: "uint256" }],
    name: "changeRequesterBaseDeposit",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [
      { name: "_cursor", type: "bytes32" },
      { name: "_count", type: "uint256" },
      { name: "_filter", type: "bool[8]" },
      { name: "_oldestFirst", type: "bool" },
      { name: "_tokenAddr", type: "address" },
    ],
    name: "queryTokens",
    outputs: [
      { name: "values", type: "bytes32[]" },
      { name: "hasMore", type: "bool" },
    ],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "sharedStakeMultiplier",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [
      { name: "", type: "address" },
      { name: "", type: "uint256" },
    ],
    name: "arbitratorDisputeIDToTokenID",
    outputs: [{ name: "", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [{ name: "", type: "uint256" }],
    name: "tokensList",
    outputs: [{ name: "", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [
      { name: "_tokenID", type: "bytes32" },
      { name: "_request", type: "uint256" },
      { name: "_round", type: "uint256" },
      { name: "_contributor", type: "address" },
    ],
    name: "getContributions",
    outputs: [{ name: "contributions", type: "uint256[3]" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "arbitrator",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "metaEvidenceUpdates",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [
      { name: "", type: "address" },
      { name: "", type: "uint256" },
    ],
    name: "addressToSubmissions",
    outputs: [{ name: "", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_beneficiary", type: "address" },
      { name: "_tokenID", type: "bytes32" },
      { name: "_request", type: "uint256" },
      { name: "_cursor", type: "uint256" },
      { name: "_count", type: "uint256" },
    ],
    name: "batchRoundWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "winnerStakeMultiplier",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: true,
    type: "function",
    inputs: [
      { name: "_tokenID", type: "bytes32" },
      { name: "_evidence", type: "string" },
    ],
    name: "challengeRequest",
    outputs: [],
    stateMutability: "payable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "requesterBaseDeposit",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [{ name: "", type: "bytes32" }],
    name: "tokens",
    outputs: [
      { name: "name", type: "string" },
      { name: "ticker", type: "string" },
      { name: "addr", type: "address" },
      { name: "symbolMultihash", type: "string" },
      { name: "status", type: "uint8" },
    ],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_loserStakeMultiplier", type: "uint256" }],
    name: "changeLoserStakeMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [
      { name: "_tokenID", type: "bytes32" },
      { name: "_request", type: "uint256" },
      { name: "_round", type: "uint256" },
    ],
    name: "getRoundInfo",
    outputs: [
      { name: "appealed", type: "bool" },
      { name: "paidFees", type: "uint256[3]" },
      { name: "hasPaid", type: "bool[3]" },
      { name: "feeRewards", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "tokenCount",
    outputs: [{ name: "count", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: true,
    type: "function",
    inputs: [
      { name: "_name", type: "string" },
      { name: "_ticker", type: "string" },
      { name: "_addr", type: "address" },
      { name: "_symbolMultihash", type: "string" },
    ],
    name: "requestStatusChange",
    outputs: [],
    stateMutability: "payable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_beneficiary", type: "address" },
      { name: "_tokenID", type: "bytes32" },
      { name: "_request", type: "uint256" },
      { name: "_round", type: "uint256" },
    ],
    name: "withdrawFeesAndRewards",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_winnerStakeMultiplier", type: "uint256" }],
    name: "changeWinnerStakeMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_arbitrator", type: "address" },
      { name: "_arbitratorExtraData", type: "bytes" },
    ],
    name: "changeArbitrator",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [{ name: "_tokenID", type: "bytes32" }],
    name: "isPermitted",
    outputs: [{ name: "allowed", type: "bool" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [
      { name: "_tokenID", type: "bytes32" },
      { name: "_request", type: "uint256" },
    ],
    name: "getRequestInfo",
    outputs: [
      { name: "disputed", type: "bool" },
      { name: "disputeID", type: "uint256" },
      { name: "submissionTime", type: "uint256" },
      { name: "resolved", type: "bool" },
      { name: "parties", type: "address[3]" },
      { name: "numberOfRounds", type: "uint256" },
      { name: "ruling", type: "uint8" },
      { name: "arbitrator", type: "address" },
      { name: "arbitratorExtraData", type: "bytes" },
    ],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_challengePeriodDuration", type: "uint256" }],
    name: "changeTimeToChallenge",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "MULTIPLIER_DIVISOR",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_registrationMetaEvidence", type: "string" },
      { name: "_clearingMetaEvidence", type: "string" },
    ],
    name: "changeMetaEvidence",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_challengerBaseDeposit", type: "uint256" }],
    name: "changeChallengerBaseDeposit",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_governor", type: "address" }],
    name: "changeGovernor",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_tokenID", type: "bytes32" }],
    name: "executeRequest",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_tokenID", type: "bytes32" },
      { name: "_evidence", type: "string" },
    ],
    name: "submitEvidence",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    payable: false,
    type: "constructor",
    inputs: [
      { name: "_arbitrator", type: "address" },
      { name: "_arbitratorExtraData", type: "bytes" },
      { name: "_registrationMetaEvidence", type: "string" },
      { name: "_clearingMetaEvidence", type: "string" },
      { name: "_governor", type: "address" },
      { name: "_requesterBaseDeposit", type: "uint256" },
      { name: "_challengerBaseDeposit", type: "uint256" },
      { name: "_challengePeriodDuration", type: "uint256" },
      { name: "_sharedStakeMultiplier", type: "uint256" },
      { name: "_winnerStakeMultiplier", type: "uint256" },
      { name: "_loserStakeMultiplier", type: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_name", type: "string", indexed: false },
      { name: "_ticker", type: "string", indexed: false },
      { name: "_symbolMultihash", type: "string", indexed: false },
      { name: "_address", type: "address", indexed: true },
    ],
    name: "TokenSubmitted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_tokenID", type: "bytes32", indexed: true },
      { name: "_registrationRequest", type: "bool", indexed: false },
    ],
    name: "RequestSubmitted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_requester", type: "address", indexed: true },
      { name: "_challenger", type: "address", indexed: true },
      { name: "_tokenID", type: "bytes32", indexed: true },
      { name: "_status", type: "uint8", indexed: false },
      { name: "_disputed", type: "bool", indexed: false },
      { name: "_appealed", type: "bool", indexed: false },
    ],
    name: "TokenStatusChange",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_tokenID", type: "bytes32", indexed: true },
      { name: "_contributor", type: "address", indexed: true },
      { name: "_request", type: "uint256", indexed: true },
      { name: "_round", type: "uint256", indexed: false },
      { name: "_value", type: "uint256", indexed: false },
    ],
    name: "RewardWithdrawal",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_metaEvidenceID", type: "uint256", indexed: true },
      { name: "_evidence", type: "string", indexed: false },
    ],
    name: "MetaEvidence",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_arbitrator", type: "address", indexed: true },
      { name: "_disputeID", type: "uint256", indexed: true },
      { name: "_metaEvidenceID", type: "uint256", indexed: false },
      { name: "_evidenceGroupID", type: "uint256", indexed: false },
    ],
    name: "Dispute",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_arbitrator", type: "address", indexed: true },
      { name: "_evidenceGroupID", type: "uint256", indexed: true },
      { name: "_party", type: "address", indexed: true },
      { name: "_evidence", type: "string", indexed: false },
    ],
    name: "Evidence",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_arbitrator", type: "address", indexed: true },
      { name: "_disputeID", type: "uint256", indexed: true },
      { name: "_ruling", type: "uint256", indexed: false },
    ],
    name: "Ruling",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MultipleArbitrableTokenTransaction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const multipleArbitrableTokenTransactionAbi = [
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "arbitratorExtraData",
    outputs: [{ name: "", type: "bytes" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [{ name: "", type: "uint256" }],
    name: "disputeIDtoTransactionID",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_disputeID", type: "uint256" },
      { name: "_ruling", type: "uint256" },
    ],
    name: "rule",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_transactionID", type: "uint256" }],
    name: "timeOutByReceiver",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "arbitrator",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: true,
    type: "function",
    inputs: [{ name: "_transactionID", type: "uint256" }],
    name: "payArbitrationFeeByReceiver",
    outputs: [],
    stateMutability: "payable",
  },
  {
    constant: false,
    payable: true,
    type: "function",
    inputs: [{ name: "_transactionID", type: "uint256" }],
    name: "payArbitrationFeeBySender",
    outputs: [],
    stateMutability: "payable",
  },
  {
    constant: false,
    payable: true,
    type: "function",
    inputs: [{ name: "_transactionID", type: "uint256" }],
    name: "appeal",
    outputs: [],
    stateMutability: "payable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [{ name: "", type: "uint256" }],
    name: "transactions",
    outputs: [
      { name: "sender", type: "address" },
      { name: "receiver", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "token", type: "address" },
      { name: "timeoutPayment", type: "uint256" },
      { name: "disputeId", type: "uint256" },
      { name: "senderFee", type: "uint256" },
      { name: "receiverFee", type: "uint256" },
      { name: "lastInteraction", type: "uint256" },
      { name: "status", type: "uint8" },
    ],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "getCountTransactions",
    outputs: [{ name: "countTransactions", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_transactionID", type: "uint256" },
      { name: "_evidence", type: "string" },
    ],
    name: "submitEvidence",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "feeTimeout",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_amount", type: "uint256" },
      { name: "_token", type: "address" },
      { name: "_timeoutPayment", type: "uint256" },
      { name: "_receiver", type: "address" },
      { name: "_metaEvidence", type: "string" },
    ],
    name: "createTransaction",
    outputs: [{ name: "transactionIndex", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_transactionID", type: "uint256" }],
    name: "executeTransaction",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_transactionID", type: "uint256" },
      { name: "_amount", type: "uint256" },
    ],
    name: "pay",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_transactionID", type: "uint256" }],
    name: "timeOutBySender",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [{ name: "_address", type: "address" }],
    name: "getTransactionIDsByAddress",
    outputs: [{ name: "transactionIDs", type: "uint256[]" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_transactionID", type: "uint256" },
      { name: "_amountReimbursed", type: "uint256" },
    ],
    name: "reimburse",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    payable: false,
    type: "constructor",
    inputs: [
      { name: "_arbitrator", type: "address" },
      { name: "_arbitratorExtraData", type: "bytes" },
      { name: "_feeTimeout", type: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_transactionID", type: "uint256", indexed: true },
      { name: "_amount", type: "uint256", indexed: false },
      { name: "_party", type: "address", indexed: false },
    ],
    name: "Payment",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_transactionID", type: "uint256", indexed: true },
      { name: "_party", type: "uint8", indexed: false },
    ],
    name: "HasToPayFee",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_arbitrator", type: "address", indexed: true },
      { name: "_disputeID", type: "uint256", indexed: true },
      { name: "_ruling", type: "uint256", indexed: false },
    ],
    name: "Ruling",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_transactionID", type: "uint256", indexed: false },
      { name: "_sender", type: "address", indexed: true },
      { name: "_receiver", type: "address", indexed: true },
      { name: "_token", type: "address", indexed: false },
      { name: "_amount", type: "uint256", indexed: false },
    ],
    name: "TransactionCreated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_metaEvidenceID", type: "uint256", indexed: true },
      { name: "_evidence", type: "string", indexed: false },
    ],
    name: "MetaEvidence",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_arbitrator", type: "address", indexed: true },
      { name: "_disputeID", type: "uint256", indexed: true },
      { name: "_metaEvidenceID", type: "uint256", indexed: false },
      { name: "_evidenceGroupID", type: "uint256", indexed: false },
    ],
    name: "Dispute",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_arbitrator", type: "address", indexed: true },
      { name: "_evidenceGroupID", type: "uint256", indexed: true },
      { name: "_party", type: "address", indexed: true },
      { name: "_evidence", type: "string", indexed: false },
    ],
    name: "Evidence",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MultipleArbitrableTransaction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const multipleArbitrableTransactionAbi = [
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "arbitratorExtraData",
    outputs: [{ name: "", type: "bytes" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [{ name: "", type: "uint256" }],
    name: "disputeIDtoTransactionID",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_disputeID", type: "uint256" },
      { name: "_ruling", type: "uint256" },
    ],
    name: "rule",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_transactionID", type: "uint256" }],
    name: "timeOutByReceiver",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "arbitrator",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: true,
    type: "function",
    inputs: [{ name: "_transactionID", type: "uint256" }],
    name: "payArbitrationFeeByReceiver",
    outputs: [],
    stateMutability: "payable",
  },
  {
    constant: false,
    payable: true,
    type: "function",
    inputs: [{ name: "_transactionID", type: "uint256" }],
    name: "payArbitrationFeeBySender",
    outputs: [],
    stateMutability: "payable",
  },
  {
    constant: false,
    payable: true,
    type: "function",
    inputs: [{ name: "_transactionID", type: "uint256" }],
    name: "appeal",
    outputs: [],
    stateMutability: "payable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [{ name: "", type: "uint256" }],
    name: "transactions",
    outputs: [
      { name: "sender", type: "address" },
      { name: "receiver", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "timeoutPayment", type: "uint256" },
      { name: "disputeId", type: "uint256" },
      { name: "senderFee", type: "uint256" },
      { name: "receiverFee", type: "uint256" },
      { name: "lastInteraction", type: "uint256" },
      { name: "status", type: "uint8" },
    ],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "getCountTransactions",
    outputs: [{ name: "countTransactions", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_transactionID", type: "uint256" },
      { name: "_evidence", type: "string" },
    ],
    name: "submitEvidence",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [],
    name: "feeTimeout",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: true,
    type: "function",
    inputs: [
      { name: "_timeoutPayment", type: "uint256" },
      { name: "_receiver", type: "address" },
      { name: "_metaEvidence", type: "string" },
    ],
    name: "createTransaction",
    outputs: [{ name: "transactionID", type: "uint256" }],
    stateMutability: "payable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_transactionID", type: "uint256" }],
    name: "executeTransaction",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_transactionID", type: "uint256" },
      { name: "_amount", type: "uint256" },
    ],
    name: "pay",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [{ name: "_transactionID", type: "uint256" }],
    name: "timeOutBySender",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [{ name: "_address", type: "address" }],
    name: "getTransactionIDsByAddress",
    outputs: [{ name: "transactionIDs", type: "uint256[]" }],
    stateMutability: "view",
  },
  {
    constant: false,
    payable: false,
    type: "function",
    inputs: [
      { name: "_transactionID", type: "uint256" },
      { name: "_amountReimbursed", type: "uint256" },
    ],
    name: "reimburse",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    payable: false,
    type: "constructor",
    inputs: [
      { name: "_arbitrator", type: "address" },
      { name: "_arbitratorExtraData", type: "bytes" },
      { name: "_feeTimeout", type: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_transactionID", type: "uint256", indexed: true },
      { name: "_amount", type: "uint256", indexed: false },
      { name: "_party", type: "address", indexed: false },
    ],
    name: "Payment",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_transactionID", type: "uint256", indexed: true },
      { name: "_party", type: "uint8", indexed: false },
    ],
    name: "HasToPayFee",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_arbitrator", type: "address", indexed: true },
      { name: "_disputeID", type: "uint256", indexed: true },
      { name: "_ruling", type: "uint256", indexed: false },
    ],
    name: "Ruling",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_transactionID", type: "uint256", indexed: false },
      { name: "_sender", type: "address", indexed: true },
      { name: "_receiver", type: "address", indexed: true },
      { name: "_amount", type: "uint256", indexed: false },
    ],
    name: "TransactionCreated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_metaEvidenceID", type: "uint256", indexed: true },
      { name: "_evidence", type: "string", indexed: false },
    ],
    name: "MetaEvidence",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_arbitrator", type: "address", indexed: true },
      { name: "_disputeID", type: "uint256", indexed: true },
      { name: "_metaEvidenceID", type: "uint256", indexed: false },
      { name: "_evidenceGroupID", type: "uint256", indexed: false },
    ],
    name: "Dispute",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "_arbitrator", type: "address", indexed: true },
      { name: "_evidenceGroupID", type: "uint256", indexed: true },
      { name: "_party", type: "address", indexed: true },
      { name: "_evidence", type: "string", indexed: false },
    ],
    name: "Evidence",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokensView
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokensViewAbi = [
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [
      { name: "_t2crAddress", internalType: "address", type: "address" },
      { name: "_tokenAddresses", internalType: "address[]", type: "address[]" },
    ],
    name: "getTokensIDsForAddresses",
    outputs: [{ name: "result", internalType: "bytes32[]", type: "bytes32[]" }],
    stateMutability: "view",
  },
  {
    constant: true,
    payable: false,
    type: "function",
    inputs: [
      { name: "_t2crAddress", internalType: "address", type: "address" },
      { name: "_tokenIDs", internalType: "bytes32[]", type: "bytes32[]" },
    ],
    name: "getTokens",
    outputs: [
      {
        name: "tokens",
        internalType: "struct TokensView.Token[]",
        type: "tuple[]",
        components: [
          { name: "ID", internalType: "bytes32", type: "bytes32" },
          { name: "name", internalType: "string", type: "string" },
          { name: "ticker", internalType: "string", type: "string" },
          { name: "addr", internalType: "address", type: "address" },
          { name: "symbolMultihash", internalType: "string", type: "string" },
          {
            name: "status",
            internalType: "enum IArbitrableTokenList.TokenStatus",
            type: "uint8",
          },
          { name: "decimals", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__
 */
export const useReadArbitrableAddressList = /*#__PURE__*/ createUseReadContract(
  { abi: arbitrableAddressListAbi }
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"challengePeriodDuration"`
 */
export const useReadArbitrableAddressListChallengePeriodDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "challengePeriodDuration",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"governor"`
 */
export const useReadArbitrableAddressListGovernor =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "governor",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"arbitratorExtraData"`
 */
export const useReadArbitrableAddressListArbitratorExtraData =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "arbitratorExtraData",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"loserStakeMultiplier"`
 */
export const useReadArbitrableAddressListLoserStakeMultiplier =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "loserStakeMultiplier",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"countByStatus"`
 */
export const useReadArbitrableAddressListCountByStatus =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "countByStatus",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"challengerBaseDeposit"`
 */
export const useReadArbitrableAddressListChallengerBaseDeposit =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "challengerBaseDeposit",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"sharedStakeMultiplier"`
 */
export const useReadArbitrableAddressListSharedStakeMultiplier =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "sharedStakeMultiplier",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"arbitrator"`
 */
export const useReadArbitrableAddressListArbitrator =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "arbitrator",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"metaEvidenceUpdates"`
 */
export const useReadArbitrableAddressListMetaEvidenceUpdates =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "metaEvidenceUpdates",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"getContributions"`
 */
export const useReadArbitrableAddressListGetContributions =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "getContributions",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"getRequestInfo"`
 */
export const useReadArbitrableAddressListGetRequestInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "getRequestInfo",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"winnerStakeMultiplier"`
 */
export const useReadArbitrableAddressListWinnerStakeMultiplier =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "winnerStakeMultiplier",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"addresses"`
 */
export const useReadArbitrableAddressListAddresses =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "addresses",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"requesterBaseDeposit"`
 */
export const useReadArbitrableAddressListRequesterBaseDeposit =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "requesterBaseDeposit",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"addressCount"`
 */
export const useReadArbitrableAddressListAddressCount =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "addressCount",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"addressList"`
 */
export const useReadArbitrableAddressListAddressList =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "addressList",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"amountWithdrawable"`
 */
export const useReadArbitrableAddressListAmountWithdrawable =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "amountWithdrawable",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"isPermitted"`
 */
export const useReadArbitrableAddressListIsPermitted =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "isPermitted",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"queryAddresses"`
 */
export const useReadArbitrableAddressListQueryAddresses =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "queryAddresses",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"arbitratorDisputeIDToAddress"`
 */
export const useReadArbitrableAddressListArbitratorDisputeIdToAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "arbitratorDisputeIDToAddress",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"MULTIPLIER_DIVISOR"`
 */
export const useReadArbitrableAddressListMultiplierDivisor =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "MULTIPLIER_DIVISOR",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"getAddressInfo"`
 */
export const useReadArbitrableAddressListGetAddressInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "getAddressInfo",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"getRoundInfo"`
 */
export const useReadArbitrableAddressListGetRoundInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableAddressListAbi,
    functionName: "getRoundInfo",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__
 */
export const useWriteArbitrableAddressList =
  /*#__PURE__*/ createUseWriteContract({ abi: arbitrableAddressListAbi });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeSharedStakeMultiplier"`
 */
export const useWriteArbitrableAddressListChangeSharedStakeMultiplier =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeSharedStakeMultiplier",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"rule"`
 */
export const useWriteArbitrableAddressListRule =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "rule",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeRequesterBaseDeposit"`
 */
export const useWriteArbitrableAddressListChangeRequesterBaseDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeRequesterBaseDeposit",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"submitEvidence"`
 */
export const useWriteArbitrableAddressListSubmitEvidence =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "submitEvidence",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"executeRequest"`
 */
export const useWriteArbitrableAddressListExecuteRequest =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "executeRequest",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"requestStatusChange"`
 */
export const useWriteArbitrableAddressListRequestStatusChange =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "requestStatusChange",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"batchRequestWithdraw"`
 */
export const useWriteArbitrableAddressListBatchRequestWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "batchRequestWithdraw",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"fundAppeal"`
 */
export const useWriteArbitrableAddressListFundAppeal =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "fundAppeal",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"batchRoundWithdraw"`
 */
export const useWriteArbitrableAddressListBatchRoundWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "batchRoundWithdraw",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeLoserStakeMultiplier"`
 */
export const useWriteArbitrableAddressListChangeLoserStakeMultiplier =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeLoserStakeMultiplier",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeWinnerStakeMultiplier"`
 */
export const useWriteArbitrableAddressListChangeWinnerStakeMultiplier =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeWinnerStakeMultiplier",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeArbitrator"`
 */
export const useWriteArbitrableAddressListChangeArbitrator =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeArbitrator",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"withdrawFeesAndRewards"`
 */
export const useWriteArbitrableAddressListWithdrawFeesAndRewards =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "withdrawFeesAndRewards",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeTimeToChallenge"`
 */
export const useWriteArbitrableAddressListChangeTimeToChallenge =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeTimeToChallenge",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeMetaEvidence"`
 */
export const useWriteArbitrableAddressListChangeMetaEvidence =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeMetaEvidence",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeChallengerBaseDeposit"`
 */
export const useWriteArbitrableAddressListChangeChallengerBaseDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeChallengerBaseDeposit",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"challengeRequest"`
 */
export const useWriteArbitrableAddressListChallengeRequest =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "challengeRequest",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeGovernor"`
 */
export const useWriteArbitrableAddressListChangeGovernor =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeGovernor",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__
 */
export const useSimulateArbitrableAddressList =
  /*#__PURE__*/ createUseSimulateContract({ abi: arbitrableAddressListAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeSharedStakeMultiplier"`
 */
export const useSimulateArbitrableAddressListChangeSharedStakeMultiplier =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeSharedStakeMultiplier",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"rule"`
 */
export const useSimulateArbitrableAddressListRule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "rule",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeRequesterBaseDeposit"`
 */
export const useSimulateArbitrableAddressListChangeRequesterBaseDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeRequesterBaseDeposit",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"submitEvidence"`
 */
export const useSimulateArbitrableAddressListSubmitEvidence =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "submitEvidence",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"executeRequest"`
 */
export const useSimulateArbitrableAddressListExecuteRequest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "executeRequest",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"requestStatusChange"`
 */
export const useSimulateArbitrableAddressListRequestStatusChange =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "requestStatusChange",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"batchRequestWithdraw"`
 */
export const useSimulateArbitrableAddressListBatchRequestWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "batchRequestWithdraw",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"fundAppeal"`
 */
export const useSimulateArbitrableAddressListFundAppeal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "fundAppeal",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"batchRoundWithdraw"`
 */
export const useSimulateArbitrableAddressListBatchRoundWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "batchRoundWithdraw",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeLoserStakeMultiplier"`
 */
export const useSimulateArbitrableAddressListChangeLoserStakeMultiplier =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeLoserStakeMultiplier",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeWinnerStakeMultiplier"`
 */
export const useSimulateArbitrableAddressListChangeWinnerStakeMultiplier =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeWinnerStakeMultiplier",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeArbitrator"`
 */
export const useSimulateArbitrableAddressListChangeArbitrator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeArbitrator",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"withdrawFeesAndRewards"`
 */
export const useSimulateArbitrableAddressListWithdrawFeesAndRewards =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "withdrawFeesAndRewards",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeTimeToChallenge"`
 */
export const useSimulateArbitrableAddressListChangeTimeToChallenge =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeTimeToChallenge",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeMetaEvidence"`
 */
export const useSimulateArbitrableAddressListChangeMetaEvidence =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeMetaEvidence",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeChallengerBaseDeposit"`
 */
export const useSimulateArbitrableAddressListChangeChallengerBaseDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeChallengerBaseDeposit",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"challengeRequest"`
 */
export const useSimulateArbitrableAddressListChallengeRequest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "challengeRequest",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `functionName` set to `"changeGovernor"`
 */
export const useSimulateArbitrableAddressListChangeGovernor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableAddressListAbi,
    functionName: "changeGovernor",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableAddressListAbi}__
 */
export const useWatchArbitrableAddressListEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: arbitrableAddressListAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `eventName` set to `"AddressSubmitted"`
 */
export const useWatchArbitrableAddressListAddressSubmittedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: arbitrableAddressListAbi,
    eventName: "AddressSubmitted",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `eventName` set to `"RequestSubmitted"`
 */
export const useWatchArbitrableAddressListRequestSubmittedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: arbitrableAddressListAbi,
    eventName: "RequestSubmitted",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `eventName` set to `"AddressStatusChange"`
 */
export const useWatchArbitrableAddressListAddressStatusChangeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: arbitrableAddressListAbi,
    eventName: "AddressStatusChange",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `eventName` set to `"RewardWithdrawal"`
 */
export const useWatchArbitrableAddressListRewardWithdrawalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: arbitrableAddressListAbi,
    eventName: "RewardWithdrawal",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `eventName` set to `"MetaEvidence"`
 */
export const useWatchArbitrableAddressListMetaEvidenceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: arbitrableAddressListAbi,
    eventName: "MetaEvidence",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `eventName` set to `"Dispute"`
 */
export const useWatchArbitrableAddressListDisputeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: arbitrableAddressListAbi,
    eventName: "Dispute",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `eventName` set to `"Evidence"`
 */
export const useWatchArbitrableAddressListEvidenceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: arbitrableAddressListAbi,
    eventName: "Evidence",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableAddressListAbi}__ and `eventName` set to `"Ruling"`
 */
export const useWatchArbitrableAddressListRulingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: arbitrableAddressListAbi,
    eventName: "Ruling",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__
 */
export const useReadArbitrableTokenList = /*#__PURE__*/ createUseReadContract({
  abi: arbitrableTokenListAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"challengePeriodDuration"`
 */
export const useReadArbitrableTokenListChallengePeriodDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "challengePeriodDuration",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"governor"`
 */
export const useReadArbitrableTokenListGovernor =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "governor",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"arbitratorExtraData"`
 */
export const useReadArbitrableTokenListArbitratorExtraData =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "arbitratorExtraData",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"amountWithdrawable"`
 */
export const useReadArbitrableTokenListAmountWithdrawable =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "amountWithdrawable",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"loserStakeMultiplier"`
 */
export const useReadArbitrableTokenListLoserStakeMultiplier =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "loserStakeMultiplier",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"countByStatus"`
 */
export const useReadArbitrableTokenListCountByStatus =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "countByStatus",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"getTokenInfo"`
 */
export const useReadArbitrableTokenListGetTokenInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "getTokenInfo",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"challengerBaseDeposit"`
 */
export const useReadArbitrableTokenListChallengerBaseDeposit =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "challengerBaseDeposit",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"queryTokens"`
 */
export const useReadArbitrableTokenListQueryTokens =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "queryTokens",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"sharedStakeMultiplier"`
 */
export const useReadArbitrableTokenListSharedStakeMultiplier =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "sharedStakeMultiplier",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"arbitratorDisputeIDToTokenID"`
 */
export const useReadArbitrableTokenListArbitratorDisputeIdToTokenId =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "arbitratorDisputeIDToTokenID",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"tokensList"`
 */
export const useReadArbitrableTokenListTokensList =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "tokensList",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"getContributions"`
 */
export const useReadArbitrableTokenListGetContributions =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "getContributions",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"arbitrator"`
 */
export const useReadArbitrableTokenListArbitrator =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "arbitrator",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"metaEvidenceUpdates"`
 */
export const useReadArbitrableTokenListMetaEvidenceUpdates =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "metaEvidenceUpdates",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"addressToSubmissions"`
 */
export const useReadArbitrableTokenListAddressToSubmissions =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "addressToSubmissions",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"winnerStakeMultiplier"`
 */
export const useReadArbitrableTokenListWinnerStakeMultiplier =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "winnerStakeMultiplier",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"requesterBaseDeposit"`
 */
export const useReadArbitrableTokenListRequesterBaseDeposit =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "requesterBaseDeposit",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"tokens"`
 */
export const useReadArbitrableTokenListTokens =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "tokens",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"getRoundInfo"`
 */
export const useReadArbitrableTokenListGetRoundInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "getRoundInfo",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"tokenCount"`
 */
export const useReadArbitrableTokenListTokenCount =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "tokenCount",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"isPermitted"`
 */
export const useReadArbitrableTokenListIsPermitted =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "isPermitted",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"getRequestInfo"`
 */
export const useReadArbitrableTokenListGetRequestInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "getRequestInfo",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"MULTIPLIER_DIVISOR"`
 */
export const useReadArbitrableTokenListMultiplierDivisor =
  /*#__PURE__*/ createUseReadContract({
    abi: arbitrableTokenListAbi,
    functionName: "MULTIPLIER_DIVISOR",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__
 */
export const useWriteArbitrableTokenList = /*#__PURE__*/ createUseWriteContract(
  { abi: arbitrableTokenListAbi }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeSharedStakeMultiplier"`
 */
export const useWriteArbitrableTokenListChangeSharedStakeMultiplier =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeSharedStakeMultiplier",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"batchRequestWithdraw"`
 */
export const useWriteArbitrableTokenListBatchRequestWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "batchRequestWithdraw",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"fundAppeal"`
 */
export const useWriteArbitrableTokenListFundAppeal =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "fundAppeal",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"rule"`
 */
export const useWriteArbitrableTokenListRule =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "rule",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeRequesterBaseDeposit"`
 */
export const useWriteArbitrableTokenListChangeRequesterBaseDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeRequesterBaseDeposit",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"batchRoundWithdraw"`
 */
export const useWriteArbitrableTokenListBatchRoundWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "batchRoundWithdraw",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"challengeRequest"`
 */
export const useWriteArbitrableTokenListChallengeRequest =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "challengeRequest",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeLoserStakeMultiplier"`
 */
export const useWriteArbitrableTokenListChangeLoserStakeMultiplier =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeLoserStakeMultiplier",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"requestStatusChange"`
 */
export const useWriteArbitrableTokenListRequestStatusChange =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "requestStatusChange",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"withdrawFeesAndRewards"`
 */
export const useWriteArbitrableTokenListWithdrawFeesAndRewards =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "withdrawFeesAndRewards",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeWinnerStakeMultiplier"`
 */
export const useWriteArbitrableTokenListChangeWinnerStakeMultiplier =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeWinnerStakeMultiplier",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeArbitrator"`
 */
export const useWriteArbitrableTokenListChangeArbitrator =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeArbitrator",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeTimeToChallenge"`
 */
export const useWriteArbitrableTokenListChangeTimeToChallenge =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeTimeToChallenge",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeMetaEvidence"`
 */
export const useWriteArbitrableTokenListChangeMetaEvidence =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeMetaEvidence",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeChallengerBaseDeposit"`
 */
export const useWriteArbitrableTokenListChangeChallengerBaseDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeChallengerBaseDeposit",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeGovernor"`
 */
export const useWriteArbitrableTokenListChangeGovernor =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeGovernor",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"executeRequest"`
 */
export const useWriteArbitrableTokenListExecuteRequest =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "executeRequest",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"submitEvidence"`
 */
export const useWriteArbitrableTokenListSubmitEvidence =
  /*#__PURE__*/ createUseWriteContract({
    abi: arbitrableTokenListAbi,
    functionName: "submitEvidence",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__
 */
export const useSimulateArbitrableTokenList =
  /*#__PURE__*/ createUseSimulateContract({ abi: arbitrableTokenListAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeSharedStakeMultiplier"`
 */
export const useSimulateArbitrableTokenListChangeSharedStakeMultiplier =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeSharedStakeMultiplier",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"batchRequestWithdraw"`
 */
export const useSimulateArbitrableTokenListBatchRequestWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "batchRequestWithdraw",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"fundAppeal"`
 */
export const useSimulateArbitrableTokenListFundAppeal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "fundAppeal",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"rule"`
 */
export const useSimulateArbitrableTokenListRule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "rule",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeRequesterBaseDeposit"`
 */
export const useSimulateArbitrableTokenListChangeRequesterBaseDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeRequesterBaseDeposit",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"batchRoundWithdraw"`
 */
export const useSimulateArbitrableTokenListBatchRoundWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "batchRoundWithdraw",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"challengeRequest"`
 */
export const useSimulateArbitrableTokenListChallengeRequest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "challengeRequest",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeLoserStakeMultiplier"`
 */
export const useSimulateArbitrableTokenListChangeLoserStakeMultiplier =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeLoserStakeMultiplier",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"requestStatusChange"`
 */
export const useSimulateArbitrableTokenListRequestStatusChange =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "requestStatusChange",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"withdrawFeesAndRewards"`
 */
export const useSimulateArbitrableTokenListWithdrawFeesAndRewards =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "withdrawFeesAndRewards",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeWinnerStakeMultiplier"`
 */
export const useSimulateArbitrableTokenListChangeWinnerStakeMultiplier =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeWinnerStakeMultiplier",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeArbitrator"`
 */
export const useSimulateArbitrableTokenListChangeArbitrator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeArbitrator",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeTimeToChallenge"`
 */
export const useSimulateArbitrableTokenListChangeTimeToChallenge =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeTimeToChallenge",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeMetaEvidence"`
 */
export const useSimulateArbitrableTokenListChangeMetaEvidence =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeMetaEvidence",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeChallengerBaseDeposit"`
 */
export const useSimulateArbitrableTokenListChangeChallengerBaseDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeChallengerBaseDeposit",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"changeGovernor"`
 */
export const useSimulateArbitrableTokenListChangeGovernor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "changeGovernor",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"executeRequest"`
 */
export const useSimulateArbitrableTokenListExecuteRequest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "executeRequest",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `functionName` set to `"submitEvidence"`
 */
export const useSimulateArbitrableTokenListSubmitEvidence =
  /*#__PURE__*/ createUseSimulateContract({
    abi: arbitrableTokenListAbi,
    functionName: "submitEvidence",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableTokenListAbi}__
 */
export const useWatchArbitrableTokenListEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: arbitrableTokenListAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `eventName` set to `"TokenSubmitted"`
 */
export const useWatchArbitrableTokenListTokenSubmittedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: arbitrableTokenListAbi,
    eventName: "TokenSubmitted",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `eventName` set to `"RequestSubmitted"`
 */
export const useWatchArbitrableTokenListRequestSubmittedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: arbitrableTokenListAbi,
    eventName: "RequestSubmitted",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `eventName` set to `"TokenStatusChange"`
 */
export const useWatchArbitrableTokenListTokenStatusChangeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: arbitrableTokenListAbi,
    eventName: "TokenStatusChange",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `eventName` set to `"RewardWithdrawal"`
 */
export const useWatchArbitrableTokenListRewardWithdrawalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: arbitrableTokenListAbi,
    eventName: "RewardWithdrawal",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `eventName` set to `"MetaEvidence"`
 */
export const useWatchArbitrableTokenListMetaEvidenceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: arbitrableTokenListAbi,
    eventName: "MetaEvidence",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `eventName` set to `"Dispute"`
 */
export const useWatchArbitrableTokenListDisputeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: arbitrableTokenListAbi,
    eventName: "Dispute",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `eventName` set to `"Evidence"`
 */
export const useWatchArbitrableTokenListEvidenceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: arbitrableTokenListAbi,
    eventName: "Evidence",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link arbitrableTokenListAbi}__ and `eventName` set to `"Ruling"`
 */
export const useWatchArbitrableTokenListRulingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: arbitrableTokenListAbi,
    eventName: "Ruling",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__
 */
export const useReadMultipleArbitrableTokenTransaction =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTokenTransactionAbi,
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"arbitratorExtraData"`
 */
export const useReadMultipleArbitrableTokenTransactionArbitratorExtraData =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "arbitratorExtraData",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"disputeIDtoTransactionID"`
 */
export const useReadMultipleArbitrableTokenTransactionDisputeIDtoTransactionId =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "disputeIDtoTransactionID",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"arbitrator"`
 */
export const useReadMultipleArbitrableTokenTransactionArbitrator =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "arbitrator",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"transactions"`
 */
export const useReadMultipleArbitrableTokenTransactionTransactions =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "transactions",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"getCountTransactions"`
 */
export const useReadMultipleArbitrableTokenTransactionGetCountTransactions =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "getCountTransactions",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"feeTimeout"`
 */
export const useReadMultipleArbitrableTokenTransactionFeeTimeout =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "feeTimeout",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"getTransactionIDsByAddress"`
 */
export const useReadMultipleArbitrableTokenTransactionGetTransactionIDsByAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "getTransactionIDsByAddress",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__
 */
export const useWriteMultipleArbitrableTokenTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"rule"`
 */
export const useWriteMultipleArbitrableTokenTransactionRule =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "rule",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"timeOutByReceiver"`
 */
export const useWriteMultipleArbitrableTokenTransactionTimeOutByReceiver =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "timeOutByReceiver",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"payArbitrationFeeByReceiver"`
 */
export const useWriteMultipleArbitrableTokenTransactionPayArbitrationFeeByReceiver =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "payArbitrationFeeByReceiver",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"payArbitrationFeeBySender"`
 */
export const useWriteMultipleArbitrableTokenTransactionPayArbitrationFeeBySender =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "payArbitrationFeeBySender",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"appeal"`
 */
export const useWriteMultipleArbitrableTokenTransactionAppeal =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "appeal",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"submitEvidence"`
 */
export const useWriteMultipleArbitrableTokenTransactionSubmitEvidence =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "submitEvidence",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"createTransaction"`
 */
export const useWriteMultipleArbitrableTokenTransactionCreateTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "createTransaction",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"executeTransaction"`
 */
export const useWriteMultipleArbitrableTokenTransactionExecuteTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "executeTransaction",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"pay"`
 */
export const useWriteMultipleArbitrableTokenTransactionPay =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "pay",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"timeOutBySender"`
 */
export const useWriteMultipleArbitrableTokenTransactionTimeOutBySender =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "timeOutBySender",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"reimburse"`
 */
export const useWriteMultipleArbitrableTokenTransactionReimburse =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "reimburse",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__
 */
export const useSimulateMultipleArbitrableTokenTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"rule"`
 */
export const useSimulateMultipleArbitrableTokenTransactionRule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "rule",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"timeOutByReceiver"`
 */
export const useSimulateMultipleArbitrableTokenTransactionTimeOutByReceiver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "timeOutByReceiver",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"payArbitrationFeeByReceiver"`
 */
export const useSimulateMultipleArbitrableTokenTransactionPayArbitrationFeeByReceiver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "payArbitrationFeeByReceiver",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"payArbitrationFeeBySender"`
 */
export const useSimulateMultipleArbitrableTokenTransactionPayArbitrationFeeBySender =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "payArbitrationFeeBySender",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"appeal"`
 */
export const useSimulateMultipleArbitrableTokenTransactionAppeal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "appeal",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"submitEvidence"`
 */
export const useSimulateMultipleArbitrableTokenTransactionSubmitEvidence =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "submitEvidence",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"createTransaction"`
 */
export const useSimulateMultipleArbitrableTokenTransactionCreateTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "createTransaction",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"executeTransaction"`
 */
export const useSimulateMultipleArbitrableTokenTransactionExecuteTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "executeTransaction",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"pay"`
 */
export const useSimulateMultipleArbitrableTokenTransactionPay =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "pay",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"timeOutBySender"`
 */
export const useSimulateMultipleArbitrableTokenTransactionTimeOutBySender =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "timeOutBySender",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"reimburse"`
 */
export const useSimulateMultipleArbitrableTokenTransactionReimburse =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: "reimburse",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__
 */
export const useWatchMultipleArbitrableTokenTransactionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTokenTransactionAbi,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `eventName` set to `"Payment"`
 */
export const useWatchMultipleArbitrableTokenTransactionPaymentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTokenTransactionAbi,
    eventName: "Payment",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `eventName` set to `"HasToPayFee"`
 */
export const useWatchMultipleArbitrableTokenTransactionHasToPayFeeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTokenTransactionAbi,
    eventName: "HasToPayFee",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `eventName` set to `"Ruling"`
 */
export const useWatchMultipleArbitrableTokenTransactionRulingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTokenTransactionAbi,
    eventName: "Ruling",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `eventName` set to `"TransactionCreated"`
 */
export const useWatchMultipleArbitrableTokenTransactionTransactionCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTokenTransactionAbi,
    eventName: "TransactionCreated",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `eventName` set to `"MetaEvidence"`
 */
export const useWatchMultipleArbitrableTokenTransactionMetaEvidenceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTokenTransactionAbi,
    eventName: "MetaEvidence",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `eventName` set to `"Dispute"`
 */
export const useWatchMultipleArbitrableTokenTransactionDisputeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTokenTransactionAbi,
    eventName: "Dispute",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `eventName` set to `"Evidence"`
 */
export const useWatchMultipleArbitrableTokenTransactionEvidenceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTokenTransactionAbi,
    eventName: "Evidence",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__
 */
export const useReadMultipleArbitrableTransaction =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTransactionAbi,
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"arbitratorExtraData"`
 */
export const useReadMultipleArbitrableTransactionArbitratorExtraData =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "arbitratorExtraData",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"disputeIDtoTransactionID"`
 */
export const useReadMultipleArbitrableTransactionDisputeIDtoTransactionId =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "disputeIDtoTransactionID",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"arbitrator"`
 */
export const useReadMultipleArbitrableTransactionArbitrator =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "arbitrator",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"transactions"`
 */
export const useReadMultipleArbitrableTransactionTransactions =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "transactions",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"getCountTransactions"`
 */
export const useReadMultipleArbitrableTransactionGetCountTransactions =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "getCountTransactions",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"feeTimeout"`
 */
export const useReadMultipleArbitrableTransactionFeeTimeout =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "feeTimeout",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"getTransactionIDsByAddress"`
 */
export const useReadMultipleArbitrableTransactionGetTransactionIDsByAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "getTransactionIDsByAddress",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__
 */
export const useWriteMultipleArbitrableTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"rule"`
 */
export const useWriteMultipleArbitrableTransactionRule =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "rule",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"timeOutByReceiver"`
 */
export const useWriteMultipleArbitrableTransactionTimeOutByReceiver =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "timeOutByReceiver",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"payArbitrationFeeByReceiver"`
 */
export const useWriteMultipleArbitrableTransactionPayArbitrationFeeByReceiver =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "payArbitrationFeeByReceiver",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"payArbitrationFeeBySender"`
 */
export const useWriteMultipleArbitrableTransactionPayArbitrationFeeBySender =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "payArbitrationFeeBySender",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"appeal"`
 */
export const useWriteMultipleArbitrableTransactionAppeal =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "appeal",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"submitEvidence"`
 */
export const useWriteMultipleArbitrableTransactionSubmitEvidence =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "submitEvidence",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"createTransaction"`
 */
export const useWriteMultipleArbitrableTransactionCreateTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "createTransaction",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"executeTransaction"`
 */
export const useWriteMultipleArbitrableTransactionExecuteTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "executeTransaction",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"pay"`
 */
export const useWriteMultipleArbitrableTransactionPay =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "pay",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"timeOutBySender"`
 */
export const useWriteMultipleArbitrableTransactionTimeOutBySender =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "timeOutBySender",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"reimburse"`
 */
export const useWriteMultipleArbitrableTransactionReimburse =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "reimburse",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__
 */
export const useSimulateMultipleArbitrableTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"rule"`
 */
export const useSimulateMultipleArbitrableTransactionRule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "rule",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"timeOutByReceiver"`
 */
export const useSimulateMultipleArbitrableTransactionTimeOutByReceiver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "timeOutByReceiver",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"payArbitrationFeeByReceiver"`
 */
export const useSimulateMultipleArbitrableTransactionPayArbitrationFeeByReceiver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "payArbitrationFeeByReceiver",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"payArbitrationFeeBySender"`
 */
export const useSimulateMultipleArbitrableTransactionPayArbitrationFeeBySender =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "payArbitrationFeeBySender",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"appeal"`
 */
export const useSimulateMultipleArbitrableTransactionAppeal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "appeal",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"submitEvidence"`
 */
export const useSimulateMultipleArbitrableTransactionSubmitEvidence =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "submitEvidence",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"createTransaction"`
 */
export const useSimulateMultipleArbitrableTransactionCreateTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "createTransaction",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"executeTransaction"`
 */
export const useSimulateMultipleArbitrableTransactionExecuteTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "executeTransaction",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"pay"`
 */
export const useSimulateMultipleArbitrableTransactionPay =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "pay",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"timeOutBySender"`
 */
export const useSimulateMultipleArbitrableTransactionTimeOutBySender =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "timeOutBySender",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"reimburse"`
 */
export const useSimulateMultipleArbitrableTransactionReimburse =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: "reimburse",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__
 */
export const useWatchMultipleArbitrableTransactionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTransactionAbi,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `eventName` set to `"Payment"`
 */
export const useWatchMultipleArbitrableTransactionPaymentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTransactionAbi,
    eventName: "Payment",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `eventName` set to `"HasToPayFee"`
 */
export const useWatchMultipleArbitrableTransactionHasToPayFeeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTransactionAbi,
    eventName: "HasToPayFee",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `eventName` set to `"Ruling"`
 */
export const useWatchMultipleArbitrableTransactionRulingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTransactionAbi,
    eventName: "Ruling",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `eventName` set to `"TransactionCreated"`
 */
export const useWatchMultipleArbitrableTransactionTransactionCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTransactionAbi,
    eventName: "TransactionCreated",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `eventName` set to `"MetaEvidence"`
 */
export const useWatchMultipleArbitrableTransactionMetaEvidenceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTransactionAbi,
    eventName: "MetaEvidence",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `eventName` set to `"Dispute"`
 */
export const useWatchMultipleArbitrableTransactionDisputeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTransactionAbi,
    eventName: "Dispute",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `eventName` set to `"Evidence"`
 */
export const useWatchMultipleArbitrableTransactionEvidenceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTransactionAbi,
    eventName: "Evidence",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokensViewAbi}__
 */
export const useReadTokensView = /*#__PURE__*/ createUseReadContract({
  abi: tokensViewAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokensViewAbi}__ and `functionName` set to `"getTokensIDsForAddresses"`
 */
export const useReadTokensViewGetTokensIDsForAddresses =
  /*#__PURE__*/ createUseReadContract({
    abi: tokensViewAbi,
    functionName: "getTokensIDsForAddresses",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokensViewAbi}__ and `functionName` set to `"getTokens"`
 */
export const useReadTokensViewGetTokens = /*#__PURE__*/ createUseReadContract({
  abi: tokensViewAbi,
  functionName: "getTokens",
});
