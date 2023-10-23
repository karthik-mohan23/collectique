import { FaStar, FaRegStar } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";

const StarRating = ({ stars, reviewsCount }) => {
  return (
    <div className="flex items-center">
      <span className=" text-yellow-500">
        {/*  If 'stars' is greater than or equal to 1, display a full star */}
        {stars >= 1 ? (
          <FaStar />
        ) : /* else If 'stars' is greater than or equal to 0.5, display a half star */
        stars >= 0.5 ? (
          <BsStarHalf />
        ) : (
          /* else if 'stars' is less than 0.5, display an empty star */
          <FaRegStar />
        )}
      </span>
      <span className=" text-yellow-500">
        {stars >= 2 ? (
          <FaStar />
        ) : stars >= 1.5 ? (
          <BsStarHalf />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className=" text-yellow-500">
        {stars >= 3 ? (
          <FaStar />
        ) : stars >= 2.5 ? (
          <BsStarHalf />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className=" text-yellow-500">
        {stars >= 4 ? (
          <FaStar />
        ) : stars >= 3.5 ? (
          <BsStarHalf />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className=" text-yellow-500">
        {stars >= 5 ? (
          <FaStar />
        ) : stars >= 4.5 ? (
          <BsStarHalf />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className="ms-2 text-gray-500 text-xs">{reviewsCount} reviews</span>
    </div>
  );
};
export default StarRating;
