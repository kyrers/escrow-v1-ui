import styled from "styled-components";
import { Button } from "@kleros/ui-components-library";

export const IconButton = styled(Button)`
  background: transparent;
  border: none;
  padding: 0;
  width: 32px;
  height: 32px;
  path {
    fill: ${({ theme }) => theme.colors.primaryBlue};
  }

  &:hover {
    opacity: 0.8;
  }
`;
