import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

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
