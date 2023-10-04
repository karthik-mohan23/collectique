import { Link } from "react-router-dom";
import { useProductsContext } from "../context/allProductsContext";
import Loader from "./Loader";
import Error from "./Error";

const Products = () => {
  const { loading, error, products } = useProductsContext();

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ">
      {products.map((product) => {
        const { _id, name, assured, image, price, rating } = product;
        return (
          <Link to={`product-details/${_id}`} key={_id} className=" w-60 mb-10">
            <img src={image} alt={name} className="h-52 object-cover w-full" />
            {assured ? <p>assured</p> : ""}
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{rating}</p>
          </Link>
        );
      })}
    </div>
  );
};
export default Products;
