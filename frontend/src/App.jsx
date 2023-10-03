import { ProductsProvider } from "./context/allProductsContext";

import { Navbar } from "./components";
import { Home } from "./pages";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <div>
      <ProductsProvider>
        <Navbar />
        <Home />
        <ProductDetails />
      </ProductsProvider>
    </div>
  );
};
export default App;
