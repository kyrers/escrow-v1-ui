import { BrowserRouter, Routes, Route } from "react-router";
import { Providers } from "./providers";
import Layout from "layout/Layout";
import Home from "components/Home/Home";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
