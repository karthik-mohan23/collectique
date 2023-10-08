import { Link } from "react-router-dom";

const ShippingAddressPage = () => {
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="w-full">
      <div className="w-[90%]  mx-auto  min-h-[80vh] ">
        <form
          className="flex flex-col gap-2 p-5 max-w-3xl mx-auto mt-20 shadow-2xl"
          onSubmit={handleAddressSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="input"
              placeholder="address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">City</span>
            </label>
            <input
              type="input"
              placeholder="city"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Pincode</span>
            </label>
            <input
              type="input"
              placeholder="pincode"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">State</span>
            </label>
            <input
              type="input"
              placeholder="state"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-4">
            <button className="btn btn-secondary">Continue to payment</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ShippingAddressPage;
