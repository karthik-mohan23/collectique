import { Link } from "react-router-dom";

const ProductCards = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 pt-20 sm:pt-10 pb-10">
      {products.map((product) => {
        const { _id, name, assured, image, price, rating } = product;
        return (
          <Link
            to={`/${_id}`}
            key={_id}
            className=" w-72 mb-10 rounded-xl shadow-xl pt-5 border-2 border-gray-500 hover:border-secondary-focus duration-300  ">
            <div>
              {/* image */}
              <div className="relative">
                <img
                  src={image}
                  alt={name}
                  className="h-52 object-cover w-full  px-3 rounded-t-2xl "
                />
                {assured === "false" ? null : (
                  <p className="absolute top-0 right-0 bg-secondary text-primary-content rounded-md px-2 py-1">
                    assured
                  </p>
                )}
              </div>
              <div className="py-5 ps-5">
                {/* rating */}
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>

                <h2 className=" py-2 opacity-75 tracking-wide">{name}</h2>

                <p className=" font-semibold text-xl tracking-wide">
                  ₹ {price}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductCards;
