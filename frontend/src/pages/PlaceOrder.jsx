import { Link } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";
import { useDispatch, useSelector } from "react-redux";
import { placeToDeliver, totalPrice } from "../features/cart/cartSlice";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const amountToPay = useSelector(totalPrice);
  const { address, city, pincode, state } = useSelector(placeToDeliver);
  const { user } = useAuthContext();

  //   to remove order details from local storage
  const handlePlaceOrder = () => {
    localStorage.removeItem("orderDetails");
    dispatch(clearCart());
  };

  return (
    <div className="w-[90%] max-w-5xl mx-auto py-16 min-h-[90vh]">
      <div className=" mx-auto overflow-x-auto  ">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Payment Method</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <p className="">{user?.name}</p>
              </th>
              <th>
                <p className="">{address}</p>
                <p className="">{city}</p>
                <p className="">{pincode}</p>
                <p className="">{state}</p>
              </th>
              <th>
                <p className="">Razorpay</p>
              </th>
              <th>
                <p>₹{amountToPay}</p>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-auto w-full">
        <Link
          to="/confirmation"
          className="btn btn-secondary flex "
          onClick={handlePlaceOrder}>
          Place Order
        </Link>
      </div>
    </div>
  );
};
export default PlaceOrder;
