import { useDispatch, useSelector } from "react-redux";
import { useAuthContext } from "../context/useAuthContext";
import {
  clearCart,
  placeToDeliver,
  totalPrice,
} from "../features/cart/cartSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Error, Loader } from "../components";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const amountToPay = useSelector(totalPrice);
  const { address, city, pincode, state } = useSelector(placeToDeliver);
  const { user } = useAuthContext();
  const cartSliceDetails = useSelector((store) => store.cart);
  const orderInfo = { ...cartSliceDetails, totalPrice: amountToPay };
  const navigate = useNavigate();

  // to get razorpay key from backend
  const [razorpayKey, setRazorPayKey] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchRazorpayKey = async () => {
    setIsError(false);
    try {
      setIsLoading(true);
      const response = await axios.get("/api/razorpay");
      const data = response.data.clientId;
      setRazorPayKey(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      console.error("Error fetching Razorpay key:", error);
    }
  };

  useEffect(() => {
    fetchRazorpayKey();
  }, []);

  const handlePlaceOrder = async () => {
    try {
      const response = await axios.post("/api/orders", orderInfo);
      if (response.status === 201) {
        localStorage.removeItem("orderDetails");
        dispatch(clearCart());
        // Redirect to the '/success' route on the client-side
        navigate("/confirmation");
        toast.success("Thank You for Your Order!");
      } else {
        console.log("error placing order");
      }
    } catch (error) {
      console.error("Error placing the order:", error);
    }
  };

  // razorpay

  const initPayment = (data) => {
    const options = {
      key: razorpayKey,
      amount: data.amount,
      currency: data.currency,
      order_id: data.id,
      name: user.name,
      handler: async (response) => {
        try {
          const verifyUrl = "/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          if (data.message === "Payment verified successfully") {
            toast.success("Payment successful");
            // Then, place the order
            await handlePlaceOrder();
          } else {
            console.log(error);
            // Handle the case where payment verification failed
            // You can display an error message or take appropriate action
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "/api/payment";
      const { data } = await axios.post(orderUrl, { amount: amountToPay });
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const handlePlaceOrderAndPayment = async () => {
  //   try {
  //     // First, initiate payment
  //     await handlePayment();

  //   } catch (error) {
  //     // Handle errors if necessary
  //     console.log(error);
  //   }
  // };

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <div className="w-[90%] max-w-5xl mx-auto py-16 min-h-[90vh]">
      <div className=" mx-auto overflow-x-auto  ">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Payment Method</th>
              <th>Payment Status</th>
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
                <p>Not Paid</p>
              </th>
              <th>
                <p>₹{amountToPay}</p>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-auto w-full flex justify-end mt-10">
        <button className="btn btn-secondary" onClick={handlePayment}>
          Place Order
        </button>
      </div>
    </div>
  );
};
export default PlaceOrder;
