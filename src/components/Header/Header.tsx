import styled from "styled-components";
import KlerosEscrowLogo from "assets/kleros.svg?react";
import ConnectWallet from "./ConnectWallet/ConnectWallet";
import ToggleTheme from "./ToggleTheme/ThemeToggle";
import Tutorial from "./Tutorial/Tutorial";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  width: 100%;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.tintPurple};
  padding: 8px 16px;
  justify-content: space-between;
`;

const EscrowLogo = styled(KlerosEscrowLogo)`
  width: auto;
  height: 46px;
  path#ESCROW {
    fill: ${({ theme }) => theme.colors.primaryText};
  }
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
