import { BrowserRouter, Routes, Route } from "react-router";
import { Providers } from "./Providers";
import Home from "./components/Home";
import Layout from "./layout/Layout";

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
