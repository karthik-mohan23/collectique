import { Error, Loader } from "../../components";
import { useAppOrdersContext } from "../../context/useAppOrdersContext";
import { AiOutlineCheckCircle } from "react-icons/ai";
const OrderRecords = () => {
  const { appOrdersLoading, appOrdersError, appOrders } = useAppOrdersContext();
  if (appOrdersLoading) {
    return <Loader />;
  }
  if (appOrdersError) {
    return <Error />;
  }

  console.log(appOrders);

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
                <th>Confirm</th>
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
                  _id,
                } = order;
                return (
                  <tr key={_id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>
                      <p>{shippingAddress.address}</p>
                      <p>{shippingAddress.city}</p>
                      <p>{shippingAddress.pincode}</p>
                      <p>{shippingAddress.state}</p>
                    </td>
                    <td>{cartItems.length}</td>
                    <td>{totalPrice}</td>
                    <td>{isDelivered ? `Deliverd` : `Not Delivered`}</td>
                    <td>
                      {isDelivered ? null : (
                        <AiOutlineCheckCircle
                          size={25}
                          className="cursor-pointer hover:text-green-400 duration-300"
                        />
                      )}
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
