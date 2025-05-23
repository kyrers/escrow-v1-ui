import styled from "styled-components";
import KlerosEscrowLogo from "assets/kleros.svg?react";
import ConnectWallet from "./ConnectWallet/ConnectWallet";
import ToggleTheme from "./ToggleTheme/ToggleTheme";
import Tutorial from "./Tutorial/Tutorial";

const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  width: 100%;
  height: 60px;
  z-index: 10;
  background-color: ${({ theme }) =>
    theme.mode === "dark"
      ? theme.colors.lightBlue
      : theme.colors.primaryPurple};
  padding: 8px 16px;
  justify-content: space-between;
`;

const EscrowLogo = styled(KlerosEscrowLogo)`
  width: auto;
  height: 46px;
`;

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export default function Header() {
  return (
    <Container>
      <EscrowLogo />
      <OptionsContainer>
        <ConnectWallet />
        <ToggleTheme />
        <Tutorial />
      </OptionsContainer>
    </Container>
  );
}
