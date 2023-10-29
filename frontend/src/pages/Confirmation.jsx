import { Link } from "react-router-dom";
import PaymentAnimation from "../components/PaymentAnimation";

const Confirmation = () => {
  return (
    <div className="w-[90%] max-w-5xl mx-auto flex flex-col items-center min-h-[90vh] pt-14">
      <PaymentAnimation />
      <h2 className="text-2xl text-center">
        We're on it! Your order will be delivered to you in 2-3 days.
      </h2>
      <div className="flex md:justify-center mt-10">
        <Link to="/" className="btn btn-outline btn-secondary">
          Start shopping
        </Link>
      </div>
    </div>
  );
};
export default Confirmation;
