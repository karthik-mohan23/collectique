import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./utils/store";
import { Provider } from "react-redux";
import { ProductsProvider } from "./context/useProductsContext";

import {
  AdminDashboard,
  Cart,
  Home,
  Login,
  OrderRecords,
  PaymentPage,
  ProductManagement,
  ShippingAddressPage,
  Signup,
  UserManagement,
} from "./pages";
import { Footer, Navbar, ProductDetails } from "./components";
import { AuthContextProvider } from "./context/useAuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
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
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route
                path="/admin/user-management"
                element={<UserManagement />}
              />
              <Route path="/admin/order-records" element={<OrderRecords />} />
              <Route
                path="/admin/product-management"
                element={<ProductManagement />}
              />
            </Routes>
            <Footer />
          </ProductsProvider>
        </Provider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};
export default App;
