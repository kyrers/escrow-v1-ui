import styled from "styled-components";
import { Link, useLocation } from "react-router";
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

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const NavLink = styled(Link)<{ active: boolean }>`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.2s;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export default function Header() {
  const location = useLocation();

  return (
    <Container>
      <EscrowLogo />
      <Navigation>
        <NavLink to="/invoices" active={location.pathname === "/invoices"}>
          Invoices
        </NavLink>
        <NavLink to="/invoices/create" active={location.pathname === "/invoices/create"}>
          Create Invoice
        </NavLink>
      </Navigation>
      <OptionsContainer>
        <ConnectWallet />
        <ToggleTheme />
        <Tutorial />
      </OptionsContainer>
    </Container>
  );
}