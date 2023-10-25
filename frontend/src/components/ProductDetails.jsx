import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import useFetchProductDetails from "../hooks/useFetchProductDetails";
import Loader from "./Loader";
import Error from "./Error";

import { TbTruckDelivery } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiServiceFill } from "react-icons/ri";
import StarRating from "./StarRating";
import { useAuthContext } from "../context/useAuthContext";
import { toast } from "sonner";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useAuthContext();
  const [qty, setQty] = useState(1);

  const { loading, error, productDetails } = useFetchProductDetails(id);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  const {
    _id,
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
  console.log(image);
  return (
    <div className="flex flex-wrap justify-between gap-5 py-16 w-[90%] max-w-4xl mx-auto">
      {/* product img container */}
      <div className="max-w-sm">
        <img src={image} alt={name} className="rounded-lg" />
      </div>
      {/* details container */}
      <div>
        <h4>{seller}</h4>
        <h2 className="text-2xl md:text-3xl font-medium">{name}</h2>
        <div className="divider"></div>
        <StarRating stars={rating} reviewsCount={numReviews} />
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
        {!user?.isAdmin && (
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(addToCart({ ...productDetails, qty }));
              toast.success("Great Choice! Keep Shopping!");
            }}>
            Add to cart
          </button>
        )}
        <div className="divider"></div>
        <p className="max-w-md">{description}</p>
        <div className="flex flex-wrap mt-4 gap-8">
          <p className="flex flex-col gap-1 items-center font-medium text-amber-600  opacity-90">
            <TbTruckDelivery size={25} /> Free Delivery*
          </p>
          <p className="flex flex-col gap-1 items-center font-medium text-amber-600  opacity-90">
            <GiTakeMyMoney size={25} /> Pay on delivery
          </p>
          <p className="flex flex-col gap-1 items-center font-medium text-amber-600 opacity-90">
            <RiServiceFill size={25} /> 10 days return policy
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
