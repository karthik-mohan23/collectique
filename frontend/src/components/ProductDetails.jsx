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
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useAuthContext();
  const [qty, setQty] = useState(1);
  const { loading, error, productDetails } = useFetchProductDetails(id);

  // rating
  const [starRating, setStarRating] = useState(1);
  const handleRatingChange = (event) => {
    const selectedRating = parseInt(event.target.value, 10);
    setStarRating(selectedRating);
  };
  // end of rating

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
        <div className="flex flex-wrap mt-4 mb-8 gap-8">
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
        <div className="divider"></div>
        {/* rating*/}
        <div>
          <div className="flex items-center gap-5 flex-wrap pt-3 mb-10">
            <h3 className="text-xl font-medium">Ratings & Reviews</h3>
            <p className="bg-green-600 text-[1rem]  flex items-center rounded-full gap-1 font-semibold text-white py-1 px-2">
              2.5
              <FaStar size={15} />
            </p>
            <p className="text-xs opacity-70">11 ratings and 2 reviews</p>
          </div>
          {/* user review */}
          <div className="flex flex-col gap-4">
            {/* add rating */}
            <div>
              <h3 className="text-xl">Add a review</h3>
            </div>
            {/* end of add rating */}
            {/* star rating component */}
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                value="1"
                checked={starRating === 1}
                onChange={handleRatingChange}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                value="2"
                checked={starRating === 2}
                onChange={handleRatingChange}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                value="3"
                checked={starRating === 3}
                onChange={handleRatingChange}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                value="4"
                checked={starRating === 4}
                onChange={handleRatingChange}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                value="5"
                checked={starRating === 5}
                onChange={handleRatingChange}
              />
            </div>
            {/* end of star rating */}

            {/* write review */}
            <textarea
              className="textarea textarea-secondary"
              placeholder="write a review"></textarea>
            {/* end of write review */}
          </div>
          {/* end of user review */}
        </div>
        {/* end of rating */}
      </div>
    </div>
  );
};
export default ProductDetails;
