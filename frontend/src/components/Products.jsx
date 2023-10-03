import { Link } from "react-router-dom";
import { useProductsContext } from "../context/allProductsContext";

const Products = () => {
  const { loading, error, products } = useProductsContext();

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ">
      {products.map((product) => {
        const { _id, name, assured, image, price, rating } = product;
        return (
          <Link to={`product-details/${_id}`} key={_id}>
            <div className="w-60">
              <div>
                <img src={image} alt={name} />
                {assured ? <p>assured</p> : ""}
              </div>

              <h2>{name}</h2>
              <p>{price}</p>
              <p>{rating}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Products;
