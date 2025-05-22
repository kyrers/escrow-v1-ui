import styled from "styled-components";
import ConnectWallet from "./ConnectWallet/ConnectWallet";
import { ToggleTheme } from "./ToggleTheme/ThemeToggle";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  width: 100%;
  z-index: 10;
`;

export default function Header() {
  return (
    <Container>
      <ToggleTheme />
      <ConnectWallet />
    </Container>
  );
}
