import axios from "axios";
import { Error, Loader } from "../../components";
import { useAppOrdersContext } from "../../context/useAppOrdersContext";
import { AiOutlineCheckCircle } from "react-icons/ai";
const OrderRecords = () => {
  const { appOrdersLoading, appOrdersError, appOrders, fetchAppOrders } =
    useAppOrdersContext();
  if (appOrdersLoading) {
    return <Loader />;
  }
  if (appOrdersError) {
    return <Error />;
  }
  console.log(appOrders);
  const handleIsDelivered = async (orderId) => {
    try {
      const response = await axios.put(`/api/orders/${orderId}/deliver`);
      fetchAppOrders();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="">
      <div className="w-[90%] max-w-5xl mx-auto min-h-screen pt-20">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Address</th>
                <th>Items</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Date Ordered</th>
                <th>Confirm</th>
                <th>Delivered Date</th>
              </tr>
            </thead>
            <tbody>
              {appOrders.map((order, index) => {
                const {
                  cartItems,
                  shippingAddress,
                  isDelivered,
                  totalPrice,
                  user,
                  createdAt,
                  updatedAt,
                  _id: orderId,
                } = order;
                return (
                  <tr key={orderId}>
                    <th>{index + 1}</th>
                    <td>{user?.name}</td>
                    <td>
                      <p>{shippingAddress.address}</p>
                      <p>{shippingAddress.city}</p>
                      <p>{shippingAddress.pincode}</p>
                      <p>{shippingAddress.state}</p>
                    </td>
                    <td>{cartItems.length}</td>
                    <td>{totalPrice}</td>
                    <td>{isDelivered ? `Delivered` : `Not Delivered`}</td>
                    <td>{new Date(createdAt).toString()}</td>
                    <td>
                      {isDelivered ? (
                        <AiOutlineCheckCircle
                          size={25}
                          className="opacity-60"
                        />
                      ) : (
                        <AiOutlineCheckCircle
                          size={25}
                          className="cursor-pointer text-accent hover:text-green-400 duration-300"
                          onClick={(e) => handleIsDelivered(orderId)}
                        />
                      )}
                    </td>
                    <td>
                      {isDelivered
                        ? new Date(updatedAt).toString()
                        : `Not Delivered`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
export default OrderRecords;
