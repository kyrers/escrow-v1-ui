import styled from "styled-components";
import ConnectWallet from "./ConnectWallet/ConnectWallet";
import { ToggleTheme } from "./ToggleTheme/ThemeToggle";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  width: 100%;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 8px;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <Container>
      <ConnectWallet />
      <ToggleTheme />
    </Container>
  );
}
