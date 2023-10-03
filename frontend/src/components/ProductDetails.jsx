import { useParams } from "react-router-dom";
import useFetchProductDetails from "../hooks/useFetchProductDetails";

const ProductDetails = () => {
  const { id } = useParams();

  console.log(id);
  const { loading, error, productDetails } = useFetchProductDetails(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error..</div>;
  }

  console.log(productDetails);
  const {
    assured,
    category,
    countInStock,
    description,
    image,

    name,

    numReviews,

    price,

    rating,

    seller,
  } = productDetails;
  return (
    <div className="flex flex-wrap justify-between gap-5 py-16 w-[90%] max-w-4xl mx-auto">
      {/* product img container */}
      <div className="max-w-sm">
        <img src={image} alt={name} />
      </div>
      {/* details container */}
      <div>
        <h4>{seller}</h4>
        <h2 className="text-2xl md:text-3xl font-medium">{name}</h2>
        <div className="divider"></div>
        <p>{countInStock} in stock</p>
        <p className="my-5 font-semibold text-xl text-orange-500">₹ {price}</p>
        <button className="btn btn-primary">Add to cart</button>
        <div className="divider"></div>
        <p className="max-w-md">{description}</p>
      </div>
    </div>
  );
};
export default ProductDetails;
