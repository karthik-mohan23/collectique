import { useAuthContext } from "../context/useAuthContext";
import useFetchMyOrders from "../hooks/useFetchMyOrders";
import { Error, Loader } from "../components";
import { Link } from "react-router-dom";

const MyOrders = () => {
  // to get userId
  const { user } = useAuthContext();
  //   custom hook to fetch user orders
  const { loading, error, myOrders } = useFetchMyOrders(user._id);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  //* if no ordered items */
  if (myOrders.length === 0) {
    return (
      <section className="w-[90%] max-w-5xl mx-auto grid place-content-center min-h-[80vh]">
        <h2 className="mb-10 text-4xl">No ordered items found.</h2>
        <Link to="/" className="btn btn-outline btn-secondary">
          See all products
        </Link>
      </section>
    );
  }

  return (
    <div className="w-[90%] max-w-5xl mx-auto py-16 min-h-[80vh] ">
      {/* Cart item details */}
      <div className="w-[90%] overflow-x-auto  ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>Address</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Ordered Date</th>
              <th>Status</th>
              <th>Order Received Date</th>
            </tr>
          </thead>
          <tbody>
            {/* order Details  */}
            {myOrders.map((item, index) => {
              const {
                _id,
                cartItems,
                shippingAddress,
                paymentMethod,
                totalPrice,
                isDelivered,
                createdAt,
                updatedAt,
              } = item;
              return (
                <tr key={_id}>
                  <td>{index + 1}</td>
                  <td>
                    <p className="">{shippingAddress.address}</p>
                    <p className="">{shippingAddress.city}</p>
                    <p className="">{shippingAddress.pincode}</p>
                    <p className="">{shippingAddress.state}</p>
                    <br />
                  </td>
                  <td>{cartItems.length}</td>
                  <td>
                    <p className="">₹{totalPrice}</p>
                  </td>
                  <td>
                    <p className="">
                      {new Date(createdAt).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </td>
                  <td>{isDelivered ? `Delivered` : `In Transit`}</td>
                  <td>
                    {isDelivered ? (
                      <p className="">
                        {new Date(updatedAt).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    ) : (
                      `Awaiting Delivery`
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyOrders;
