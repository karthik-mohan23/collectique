import sale from "../assets/sale.png";
import ProductsListings from "../components/ProductsListings";
const Products = () => {
  return (
    <section>
      <img
        src={sale}
        alt="sale"
        className="my-10 rounded-md w-[99%] lg:w-[90%] max-w-5xl mx-auto"
      />
      <ProductsListings />
    </section>
  );
};
export default Products;
