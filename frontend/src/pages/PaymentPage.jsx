import { Link } from "react-router-dom";

const PaymentPage = () => {
  return (
    <div>
      <div className="min-h-[80vh] w-[90%] mx-auto max-w-5xl grid place-content-center">
        <div className=" mx-auto   flex gap-2 mb-8">
          <p>Payment method: </p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="radio-2"
              className="radio radio-primary"
            />
            <label>Razorpay</label>
          </div>
        </div>
        <div className="form-control">
          <Link to="/placeorder" className="btn btn-secondary">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PaymentPage;
