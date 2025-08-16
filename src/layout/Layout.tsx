import styled from "styled-components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { Outlet } from "react-router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default function Layout() {
  return (
    <Container>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </Container>
  );
}
