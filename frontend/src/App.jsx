import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductsProvider } from "./context/allProductsContext";

import { Home } from "./pages";
import { Navbar, ProductDetails } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  );
};
export default App;
