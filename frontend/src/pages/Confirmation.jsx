import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="w-[90%] max-w-5xl mx-auto grid place-content-center min-h-[80vh]">
      <h2 className="text-4xl">
        We're on it! Your order will be delivered to you in 2-3 days.
      </h2>
      <div className="flex md:justify-center mt-5">
        <Link to="/" className="btn btn-outline btn-secondary">
          See all products
        </Link>
      </div>
    </div>
  );
};
export default Confirmation;
