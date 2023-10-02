import { useProductsContext } from "../context/allProductsContext";

const Products = () => {
  const products = useProductsContext();
  console.log(products);

  return <div>Products</div>;
};
export default Products;
