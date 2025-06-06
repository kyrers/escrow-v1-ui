import { parseAbiItem } from "viem";

export const metaEvidenceEvent = parseAbiItem(
  "event MetaEvidence(uint indexed _metaEvidenceID, string _evidence)"
);
