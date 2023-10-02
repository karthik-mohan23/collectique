import { ProductsProvider } from "./context/allProductsContext";
import { Navbar, Products } from "./components";

const App = () => {
  return (
    <div>
      <ProductsProvider>
        <Navbar />
        <Products />
      </ProductsProvider>
    </div>
  );
};
export default App;
