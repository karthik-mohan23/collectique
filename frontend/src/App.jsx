import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./utils/store";
import { Provider } from "react-redux";
import { ProductsProvider } from "./context/allProductsContext";

import { Cart, Home, Login, ShippingAddressPage, Signup } from "./pages";
import { Navbar, ProductDetails } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ProductsProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/address" element={<ShippingAddressPage />} />
          </Routes>
        </ProductsProvider>
      </Provider>
    </BrowserRouter>
  );
};
export default App;
