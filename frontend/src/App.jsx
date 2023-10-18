import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./utils/store";
import { Provider } from "react-redux";
import { ProductsProvider } from "./context/useProductsContext";

import {
  AdminDashboard,
  AdminManagement,
  Cart,
  Confirmation,
  Home,
  Login,
  MyOrders,
  OrderRecords,
  PaymentPage,
  PlaceOrder,
  ProductManagement,
  ShippingAddressPage,
  Signup,
  UserManagement,
} from "./pages";
import {
  Footer,
  Navbar,
  ProductDetails,
  PrivateUserRoutes,
} from "./components";
import { AuthContextProvider } from "./context/useAuthContext";
import { AppUsersProvider } from "./context/useAppUsersContext";
import { AppOrdersProvider } from "./context/useAppOrdersContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Provider store={store}>
          <ProductsProvider>
            {/* All app users context */}
            <AppUsersProvider>
              {/* All Orders context */}
              <AppOrdersProvider>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/product-details/:id"
                    element={<ProductDetails />}
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/sign-up" element={<Signup />} />
                  <Route path="/cart" element={<Cart />} />
                  {/* Logged in routes */}
                  <Route path="" element={<PrivateUserRoutes />}>
                    <Route path="/address" element={<ShippingAddressPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path="/place-order" element={<PlaceOrder />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                    <Route path="/my-orders" element={<MyOrders />} />
                  </Route>
                  {/* Admin */}

                  <Route
                    path="/admin/admin-dashboard"
                    element={<AdminDashboard />}
                  />
                  <Route
                    path="/admin/active-users"
                    element={<UserManagement />}
                  />
                  <Route
                    path="/admin/admin-users"
                    element={<AdminManagement />}
                  />
                  <Route
                    path="/admin/order-records"
                    element={<OrderRecords />}
                  />
                  <Route
                    path="/admin/product-management"
                    element={<ProductManagement />}
                  />
                </Routes>
                <Footer />
              </AppOrdersProvider>
            </AppUsersProvider>
          </ProductsProvider>
        </Provider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};
export default App;
