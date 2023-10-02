import { Navbar } from "./components";
import { ProductsProvider } from "./context/allProductsContext";

const App = () => {
  return (
    <div>
      <ProductsProvider>
        <Navbar />
      </ProductsProvider>
    </div>
  );
};
export default App;
