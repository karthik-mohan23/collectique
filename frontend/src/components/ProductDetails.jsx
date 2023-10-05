import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import useFetchProductDetails from "../hooks/useFetchProductDetails";
import Loader from "./Loader";
import Error from "./Error";

const ProductDetails = () => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const { id } = useParams();
  const { loading, error, productDetails } = useFetchProductDetails(id);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

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
        <p className="my-4 font-semibold text-xl text-orange-500">₹ {price}</p>
        {/* select input */}
        <div className="form-control w-full max-w-xs mb-6">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <select
            className="select select-bordered"
            value={qty}
            onChange={(e) => setQty(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addToCart({ ...productDetails, qty }))}>
          Add to cart
        </button>
        <div className="divider"></div>
        <p className="max-w-md">{description}</p>
      </div>
    </div>
  );
};
export default ProductDetails;
