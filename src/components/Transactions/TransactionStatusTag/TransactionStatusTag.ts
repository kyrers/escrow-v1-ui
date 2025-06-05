import { Tag } from "@kleros/ui-components-library";
import styled from "styled-components";

interface Props {
  status: string;
  customWidth?: string;
}

export const TransactionStatusTag = styled(Tag)<Props>`
  --status-color: ${({ theme, status }) =>
    status === "Completed"
      ? theme.colors.success
      : status === "Disputed"
      ? theme.colors.error
      : theme.colors.warning};

  width: ${({ customWidth = "fit-content" }) => customWidth};

  pointer-events: none;
  border-color: var(--status-color);

  p {
    font-weight: bold;
    color: var(--status-color);
  }
`;
