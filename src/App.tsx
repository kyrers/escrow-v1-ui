import { BrowserRouter, Routes, Route } from "react-router";
import { Providers } from "./providers";
import Layout from "layout/Layout";
import Home from "components/Home/Home";
import { CreateInvoiceForm, InvoiceList } from "components/Invoice";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/invoices" element={<InvoiceList />} />
            <Route path="/invoices/create" element={<CreateInvoiceForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
