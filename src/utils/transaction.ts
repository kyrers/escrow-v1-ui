export const mapTransactionStatus = (
  backendStatus: string,
  amountInEscrow?: string
): "Pending" | "Completed" | "Disputed" | "Unknown" => {
  switch (backendStatus) {
    case "Resolved":
      return "Completed";
    case "DisputeCreated":
      return "Disputed";
    case "WaitingSender":
    case "WaitingReceiver":
      return "Pending";
    case "NoDispute":
      //Check if the transaction has been paid (amount in escrow is 0)
      return amountInEscrow === "0" ? "Completed" : "Pending";
    default:
      return "Unknown";
  }
};
