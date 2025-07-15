import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MultipleArbitrableTokenTransaction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const multipleArbitrableTokenTransactionAbi = [
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'arbitratorExtraData',
    outputs: [{ name: '', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [{ name: '', type: 'uint256' }],
    name: 'disputeIDtoTransactionID',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_disputeID', type: 'uint256' },
      { name: '_ruling', type: 'uint256' },
    ],
    name: 'rule',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [{ name: '_transactionID', type: 'uint256' }],
    name: 'timeOutByReceiver',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'arbitrator',
    outputs: [{ name: '', type: 'address' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: true,
    type: 'function',
    inputs: [{ name: '_transactionID', type: 'uint256' }],
    name: 'payArbitrationFeeByReceiver',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    constant: false,
    payable: true,
    type: 'function',
    inputs: [{ name: '_transactionID', type: 'uint256' }],
    name: 'payArbitrationFeeBySender',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    constant: false,
    payable: true,
    type: 'function',
    inputs: [{ name: '_transactionID', type: 'uint256' }],
    name: 'appeal',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [{ name: '', type: 'uint256' }],
    name: 'transactions',
    outputs: [
      { name: 'sender', type: 'address' },
      { name: 'receiver', type: 'address' },
      { name: 'amount', type: 'uint256' },
      { name: 'token', type: 'address' },
      { name: 'timeoutPayment', type: 'uint256' },
      { name: 'disputeId', type: 'uint256' },
      { name: 'senderFee', type: 'uint256' },
      { name: 'receiverFee', type: 'uint256' },
      { name: 'lastInteraction', type: 'uint256' },
      { name: 'status', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'getCountTransactions',
    outputs: [{ name: 'countTransactions', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_transactionID', type: 'uint256' },
      { name: '_evidence', type: 'string' },
    ],
    name: 'submitEvidence',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'feeTimeout',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_amount', type: 'uint256' },
      { name: '_token', type: 'address' },
      { name: '_timeoutPayment', type: 'uint256' },
      { name: '_receiver', type: 'address' },
      { name: '_metaEvidence', type: 'string' },
    ],
    name: 'createTransaction',
    outputs: [{ name: 'transactionIndex', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [{ name: '_transactionID', type: 'uint256' }],
    name: 'executeTransaction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_transactionID', type: 'uint256' },
      { name: '_amount', type: 'uint256' },
    ],
    name: 'pay',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [{ name: '_transactionID', type: 'uint256' }],
    name: 'timeOutBySender',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [{ name: '_address', type: 'address' }],
    name: 'getTransactionIDsByAddress',
    outputs: [{ name: 'transactionIDs', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_transactionID', type: 'uint256' },
      { name: '_amountReimbursed', type: 'uint256' },
    ],
    name: 'reimburse',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    payable: false,
    type: 'constructor',
    inputs: [
      { name: '_arbitrator', type: 'address' },
      { name: '_arbitratorExtraData', type: 'bytes' },
      { name: '_feeTimeout', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_transactionID', type: 'uint256', indexed: true },
      { name: '_amount', type: 'uint256', indexed: false },
      { name: '_party', type: 'address', indexed: false },
    ],
    name: 'Payment',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_transactionID', type: 'uint256', indexed: true },
      { name: '_party', type: 'uint8', indexed: false },
    ],
    name: 'HasToPayFee',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_arbitrator', type: 'address', indexed: true },
      { name: '_disputeID', type: 'uint256', indexed: true },
      { name: '_ruling', type: 'uint256', indexed: false },
    ],
    name: 'Ruling',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_transactionID', type: 'uint256', indexed: false },
      { name: '_sender', type: 'address', indexed: true },
      { name: '_receiver', type: 'address', indexed: true },
      { name: '_token', type: 'address', indexed: false },
      { name: '_amount', type: 'uint256', indexed: false },
    ],
    name: 'TransactionCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_metaEvidenceID', type: 'uint256', indexed: true },
      { name: '_evidence', type: 'string', indexed: false },
    ],
    name: 'MetaEvidence',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_arbitrator', type: 'address', indexed: true },
      { name: '_disputeID', type: 'uint256', indexed: true },
      { name: '_metaEvidenceID', type: 'uint256', indexed: false },
      { name: '_evidenceGroupID', type: 'uint256', indexed: false },
    ],
    name: 'Dispute',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_arbitrator', type: 'address', indexed: true },
      { name: '_evidenceGroupID', type: 'uint256', indexed: true },
      { name: '_party', type: 'address', indexed: true },
      { name: '_evidence', type: 'string', indexed: false },
    ],
    name: 'Evidence',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MultipleArbitrableTransaction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const multipleArbitrableTransactionAbi = [
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'arbitratorExtraData',
    outputs: [{ name: '', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [{ name: '', type: 'uint256' }],
    name: 'disputeIDtoTransactionID',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_disputeID', type: 'uint256' },
      { name: '_ruling', type: 'uint256' },
    ],
    name: 'rule',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [{ name: '_transactionID', type: 'uint256' }],
    name: 'timeOutByReceiver',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'arbitrator',
    outputs: [{ name: '', type: 'address' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: true,
    type: 'function',
    inputs: [{ name: '_transactionID', type: 'uint256' }],
    name: 'payArbitrationFeeByReceiver',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    constant: false,
    payable: true,
    type: 'function',
    inputs: [{ name: '_transactionID', type: 'uint256' }],
    name: 'payArbitrationFeeBySender',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    constant: false,
    payable: true,
    type: 'function',
    inputs: [{ name: '_transactionID', type: 'uint256' }],
    name: 'appeal',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [{ name: '', type: 'uint256' }],
    name: 'transactions',
    outputs: [
      { name: 'sender', type: 'address' },
      { name: 'receiver', type: 'address' },
      { name: 'amount', type: 'uint256' },
      { name: 'timeoutPayment', type: 'uint256' },
      { name: 'disputeId', type: 'uint256' },
      { name: 'senderFee', type: 'uint256' },
      { name: 'receiverFee', type: 'uint256' },
      { name: 'lastInteraction', type: 'uint256' },
      { name: 'status', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'getCountTransactions',
    outputs: [{ name: 'countTransactions', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_transactionID', type: 'uint256' },
      { name: '_evidence', type: 'string' },
    ],
    name: 'submitEvidence',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'feeTimeout',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: true,
    type: 'function',
    inputs: [
      { name: '_timeoutPayment', type: 'uint256' },
      { name: '_receiver', type: 'address' },
      { name: '_metaEvidence', type: 'string' },
    ],
    name: 'createTransaction',
    outputs: [{ name: 'transactionID', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [{ name: '_transactionID', type: 'uint256' }],
    name: 'executeTransaction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_transactionID', type: 'uint256' },
      { name: '_amount', type: 'uint256' },
    ],
    name: 'pay',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [{ name: '_transactionID', type: 'uint256' }],
    name: 'timeOutBySender',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [{ name: '_address', type: 'address' }],
    name: 'getTransactionIDsByAddress',
    outputs: [{ name: 'transactionIDs', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: '_transactionID', type: 'uint256' },
      { name: '_amountReimbursed', type: 'uint256' },
    ],
    name: 'reimburse',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    payable: false,
    type: 'constructor',
    inputs: [
      { name: '_arbitrator', type: 'address' },
      { name: '_arbitratorExtraData', type: 'bytes' },
      { name: '_feeTimeout', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_transactionID', type: 'uint256', indexed: true },
      { name: '_amount', type: 'uint256', indexed: false },
      { name: '_party', type: 'address', indexed: false },
    ],
    name: 'Payment',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_transactionID', type: 'uint256', indexed: true },
      { name: '_party', type: 'uint8', indexed: false },
    ],
    name: 'HasToPayFee',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_arbitrator', type: 'address', indexed: true },
      { name: '_disputeID', type: 'uint256', indexed: true },
      { name: '_ruling', type: 'uint256', indexed: false },
    ],
    name: 'Ruling',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_transactionID', type: 'uint256', indexed: false },
      { name: '_sender', type: 'address', indexed: true },
      { name: '_receiver', type: 'address', indexed: true },
      { name: '_amount', type: 'uint256', indexed: false },
    ],
    name: 'TransactionCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_metaEvidenceID', type: 'uint256', indexed: true },
      { name: '_evidence', type: 'string', indexed: false },
    ],
    name: 'MetaEvidence',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_arbitrator', type: 'address', indexed: true },
      { name: '_disputeID', type: 'uint256', indexed: true },
      { name: '_metaEvidenceID', type: 'uint256', indexed: false },
      { name: '_evidenceGroupID', type: 'uint256', indexed: false },
    ],
    name: 'Dispute',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_arbitrator', type: 'address', indexed: true },
      { name: '_evidenceGroupID', type: 'uint256', indexed: true },
      { name: '_party', type: 'address', indexed: true },
      { name: '_evidence', type: 'string', indexed: false },
    ],
    name: 'Evidence',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__
 */
export const useReadMultipleArbitrableTokenTransaction =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTokenTransactionAbi,
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"arbitratorExtraData"`
 */
export const useReadMultipleArbitrableTokenTransactionArbitratorExtraData =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'arbitratorExtraData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"disputeIDtoTransactionID"`
 */
export const useReadMultipleArbitrableTokenTransactionDisputeIDtoTransactionId =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'disputeIDtoTransactionID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"arbitrator"`
 */
export const useReadMultipleArbitrableTokenTransactionArbitrator =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'arbitrator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"transactions"`
 */
export const useReadMultipleArbitrableTokenTransactionTransactions =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'transactions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"getCountTransactions"`
 */
export const useReadMultipleArbitrableTokenTransactionGetCountTransactions =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'getCountTransactions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"feeTimeout"`
 */
export const useReadMultipleArbitrableTokenTransactionFeeTimeout =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'feeTimeout',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"getTransactionIDsByAddress"`
 */
export const useReadMultipleArbitrableTokenTransactionGetTransactionIDsByAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'getTransactionIDsByAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__
 */
export const useWriteMultipleArbitrableTokenTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"rule"`
 */
export const useWriteMultipleArbitrableTokenTransactionRule =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'rule',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"timeOutByReceiver"`
 */
export const useWriteMultipleArbitrableTokenTransactionTimeOutByReceiver =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'timeOutByReceiver',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"payArbitrationFeeByReceiver"`
 */
export const useWriteMultipleArbitrableTokenTransactionPayArbitrationFeeByReceiver =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'payArbitrationFeeByReceiver',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"payArbitrationFeeBySender"`
 */
export const useWriteMultipleArbitrableTokenTransactionPayArbitrationFeeBySender =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'payArbitrationFeeBySender',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"appeal"`
 */
export const useWriteMultipleArbitrableTokenTransactionAppeal =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'appeal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"submitEvidence"`
 */
export const useWriteMultipleArbitrableTokenTransactionSubmitEvidence =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'submitEvidence',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"createTransaction"`
 */
export const useWriteMultipleArbitrableTokenTransactionCreateTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'createTransaction',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"executeTransaction"`
 */
export const useWriteMultipleArbitrableTokenTransactionExecuteTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'executeTransaction',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"pay"`
 */
export const useWriteMultipleArbitrableTokenTransactionPay =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'pay',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"timeOutBySender"`
 */
export const useWriteMultipleArbitrableTokenTransactionTimeOutBySender =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'timeOutBySender',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"reimburse"`
 */
export const useWriteMultipleArbitrableTokenTransactionReimburse =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'reimburse',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__
 */
export const useSimulateMultipleArbitrableTokenTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"rule"`
 */
export const useSimulateMultipleArbitrableTokenTransactionRule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'rule',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"timeOutByReceiver"`
 */
export const useSimulateMultipleArbitrableTokenTransactionTimeOutByReceiver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'timeOutByReceiver',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"payArbitrationFeeByReceiver"`
 */
export const useSimulateMultipleArbitrableTokenTransactionPayArbitrationFeeByReceiver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'payArbitrationFeeByReceiver',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"payArbitrationFeeBySender"`
 */
export const useSimulateMultipleArbitrableTokenTransactionPayArbitrationFeeBySender =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'payArbitrationFeeBySender',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"appeal"`
 */
export const useSimulateMultipleArbitrableTokenTransactionAppeal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'appeal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"submitEvidence"`
 */
export const useSimulateMultipleArbitrableTokenTransactionSubmitEvidence =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'submitEvidence',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"createTransaction"`
 */
export const useSimulateMultipleArbitrableTokenTransactionCreateTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'createTransaction',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"executeTransaction"`
 */
export const useSimulateMultipleArbitrableTokenTransactionExecuteTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'executeTransaction',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"pay"`
 */
export const useSimulateMultipleArbitrableTokenTransactionPay =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'pay',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"timeOutBySender"`
 */
export const useSimulateMultipleArbitrableTokenTransactionTimeOutBySender =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'timeOutBySender',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `functionName` set to `"reimburse"`
 */
export const useSimulateMultipleArbitrableTokenTransactionReimburse =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTokenTransactionAbi,
    functionName: 'reimburse',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__
 */
export const useWatchMultipleArbitrableTokenTransactionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTokenTransactionAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `eventName` set to `"Payment"`
 */
export const useWatchMultipleArbitrableTokenTransactionPaymentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTokenTransactionAbi,
    eventName: 'Payment',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `eventName` set to `"HasToPayFee"`
 */
export const useWatchMultipleArbitrableTokenTransactionHasToPayFeeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTokenTransactionAbi,
    eventName: 'HasToPayFee',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `eventName` set to `"Ruling"`
 */
export const useWatchMultipleArbitrableTokenTransactionRulingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTokenTransactionAbi,
    eventName: 'Ruling',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `eventName` set to `"TransactionCreated"`
 */
export const useWatchMultipleArbitrableTokenTransactionTransactionCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTokenTransactionAbi,
    eventName: 'TransactionCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `eventName` set to `"MetaEvidence"`
 */
export const useWatchMultipleArbitrableTokenTransactionMetaEvidenceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTokenTransactionAbi,
    eventName: 'MetaEvidence',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `eventName` set to `"Dispute"`
 */
export const useWatchMultipleArbitrableTokenTransactionDisputeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTokenTransactionAbi,
    eventName: 'Dispute',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTokenTransactionAbi}__ and `eventName` set to `"Evidence"`
 */
export const useWatchMultipleArbitrableTokenTransactionEvidenceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTokenTransactionAbi,
    eventName: 'Evidence',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__
 */
export const useReadMultipleArbitrableTransaction =
  /*#__PURE__*/ createUseReadContract({ abi: multipleArbitrableTransactionAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"arbitratorExtraData"`
 */
export const useReadMultipleArbitrableTransactionArbitratorExtraData =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'arbitratorExtraData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"disputeIDtoTransactionID"`
 */
export const useReadMultipleArbitrableTransactionDisputeIDtoTransactionId =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'disputeIDtoTransactionID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"arbitrator"`
 */
export const useReadMultipleArbitrableTransactionArbitrator =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'arbitrator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"transactions"`
 */
export const useReadMultipleArbitrableTransactionTransactions =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'transactions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"getCountTransactions"`
 */
export const useReadMultipleArbitrableTransactionGetCountTransactions =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'getCountTransactions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"feeTimeout"`
 */
export const useReadMultipleArbitrableTransactionFeeTimeout =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'feeTimeout',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"getTransactionIDsByAddress"`
 */
export const useReadMultipleArbitrableTransactionGetTransactionIDsByAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'getTransactionIDsByAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__
 */
export const useWriteMultipleArbitrableTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"rule"`
 */
export const useWriteMultipleArbitrableTransactionRule =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'rule',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"timeOutByReceiver"`
 */
export const useWriteMultipleArbitrableTransactionTimeOutByReceiver =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'timeOutByReceiver',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"payArbitrationFeeByReceiver"`
 */
export const useWriteMultipleArbitrableTransactionPayArbitrationFeeByReceiver =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'payArbitrationFeeByReceiver',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"payArbitrationFeeBySender"`
 */
export const useWriteMultipleArbitrableTransactionPayArbitrationFeeBySender =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'payArbitrationFeeBySender',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"appeal"`
 */
export const useWriteMultipleArbitrableTransactionAppeal =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'appeal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"submitEvidence"`
 */
export const useWriteMultipleArbitrableTransactionSubmitEvidence =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'submitEvidence',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"createTransaction"`
 */
export const useWriteMultipleArbitrableTransactionCreateTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'createTransaction',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"executeTransaction"`
 */
export const useWriteMultipleArbitrableTransactionExecuteTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'executeTransaction',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"pay"`
 */
export const useWriteMultipleArbitrableTransactionPay =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'pay',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"timeOutBySender"`
 */
export const useWriteMultipleArbitrableTransactionTimeOutBySender =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'timeOutBySender',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"reimburse"`
 */
export const useWriteMultipleArbitrableTransactionReimburse =
  /*#__PURE__*/ createUseWriteContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'reimburse',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__
 */
export const useSimulateMultipleArbitrableTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"rule"`
 */
export const useSimulateMultipleArbitrableTransactionRule =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'rule',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"timeOutByReceiver"`
 */
export const useSimulateMultipleArbitrableTransactionTimeOutByReceiver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'timeOutByReceiver',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"payArbitrationFeeByReceiver"`
 */
export const useSimulateMultipleArbitrableTransactionPayArbitrationFeeByReceiver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'payArbitrationFeeByReceiver',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"payArbitrationFeeBySender"`
 */
export const useSimulateMultipleArbitrableTransactionPayArbitrationFeeBySender =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'payArbitrationFeeBySender',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"appeal"`
 */
export const useSimulateMultipleArbitrableTransactionAppeal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'appeal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"submitEvidence"`
 */
export const useSimulateMultipleArbitrableTransactionSubmitEvidence =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'submitEvidence',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"createTransaction"`
 */
export const useSimulateMultipleArbitrableTransactionCreateTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'createTransaction',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"executeTransaction"`
 */
export const useSimulateMultipleArbitrableTransactionExecuteTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'executeTransaction',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"pay"`
 */
export const useSimulateMultipleArbitrableTransactionPay =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'pay',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"timeOutBySender"`
 */
export const useSimulateMultipleArbitrableTransactionTimeOutBySender =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'timeOutBySender',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `functionName` set to `"reimburse"`
 */
export const useSimulateMultipleArbitrableTransactionReimburse =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multipleArbitrableTransactionAbi,
    functionName: 'reimburse',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__
 */
export const useWatchMultipleArbitrableTransactionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTransactionAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `eventName` set to `"Payment"`
 */
export const useWatchMultipleArbitrableTransactionPaymentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTransactionAbi,
    eventName: 'Payment',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `eventName` set to `"HasToPayFee"`
 */
export const useWatchMultipleArbitrableTransactionHasToPayFeeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTransactionAbi,
    eventName: 'HasToPayFee',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `eventName` set to `"Ruling"`
 */
export const useWatchMultipleArbitrableTransactionRulingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTransactionAbi,
    eventName: 'Ruling',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `eventName` set to `"TransactionCreated"`
 */
export const useWatchMultipleArbitrableTransactionTransactionCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTransactionAbi,
    eventName: 'TransactionCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `eventName` set to `"MetaEvidence"`
 */
export const useWatchMultipleArbitrableTransactionMetaEvidenceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTransactionAbi,
    eventName: 'MetaEvidence',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `eventName` set to `"Dispute"`
 */
export const useWatchMultipleArbitrableTransactionDisputeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTransactionAbi,
    eventName: 'Dispute',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link multipleArbitrableTransactionAbi}__ and `eventName` set to `"Evidence"`
 */
export const useWatchMultipleArbitrableTransactionEvidenceEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: multipleArbitrableTransactionAbi,
    eventName: 'Evidence',
  })
