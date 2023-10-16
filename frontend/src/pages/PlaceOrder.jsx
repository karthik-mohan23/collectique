import { useDispatch, useSelector } from "react-redux";
import { useAuthContext } from "../context/useAuthContext";
import { placeToDeliver, totalPrice } from "../features/cart/cartSlice";
import axios from "axios";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const amountToPay = useSelector(totalPrice);
  const { address, city, pincode, state } = useSelector(placeToDeliver);
  const { user } = useAuthContext();
  const cartSliceDetails = useSelector((store) => store.cart);

  const orderInfo = { ...cartSliceDetails, totalPrice: amountToPay };
  console.log(orderInfo);

  // const handlePlaceOrder = async () => {
  //   try {
  //     console.log("before post");
  //     const response = await axios.post(
  //       "http://localhost:5000/api/orders",
  //       orderInfo
  //     );
  //     console.log("after post");
  //     console.log(response);
  //     localStorage.removeItem("orderDetails");
  //     dispatch(clearCart());
  //   } catch (error) {
  //     console.error("Error placing the order:", error);
  //   }
  // };
  const handlePlaceOrder = async () => {
    try {
      console.log("before post");
      const response = await axios.post("http://localhost:5000/api/orders", {
        message: "hi",
      });
      console.log("after post");
      console.log(response);
      // localStorage.removeItem("orderDetails");
      // dispatch(clearCart());
    } catch (error) {
      console.error("Error placing the order:", error);
    }
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
        <button className="btn btn-secondary  " onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};
export default PlaceOrder;
