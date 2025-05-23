import styled from "styled-components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { Outlet } from "react-router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
`;

export default function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
