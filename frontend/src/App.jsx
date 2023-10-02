import { ProductsProvider } from "./context/allProductsContext";

import { Navbar } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <div>
      <ProductsProvider>
        <Navbar />
        <Home />
      </ProductsProvider>
    </div>
  );
};
export default App;
