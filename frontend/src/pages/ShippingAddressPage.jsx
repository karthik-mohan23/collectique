import { useState } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { saveShippingAddress } from "../features/cart/cartSlice";

const ShippingAddressPage = () => {
  const dispatch = useDispatch();

  const [addressData, setAddressData] = useState({
    address: "",
    city: "",
    pincode: "",
    state: "",
  });

  const handleAddressChange = (e) => {
    setAddressData({
      ...addressData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (
      !addressData.address ||
      !addressData.city ||
      !addressData.pincode ||
      !addressData.state
    ) {
      return;
    }
    console.log(addressData);
    dispatch(saveShippingAddress(addressData));
  };

  return (
    <div className="w-full">
      <div className="w-[90%]  mx-auto  min-h-[80vh] ">
        <form className="flex flex-col gap-2 p-5 max-w-3xl mx-auto mt-20 shadow-2xl">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="input"
              placeholder="address"
              className="input input-bordered"
              name="address"
              value={addressData.address}
              onChange={handleAddressChange}
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
              name="city"
              value={addressData.city}
              onChange={handleAddressChange}
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
              name="pincode"
              value={addressData.pincode}
              onChange={handleAddressChange}
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
              name="state"
              value={addressData.state}
              onChange={handleAddressChange}
              required
            />
          </div>
          <div className="form-control mt-4">
            <button className="btn btn-secondary" onClick={handleAddressSubmit}>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ShippingAddressPage;
