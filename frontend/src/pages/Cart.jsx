import { useSelector } from "react-redux";
import { EmptyCart } from "../components";

const Cart = () => {
  const { cartItems } = useSelector((store) => store.cart);

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="w-[90%] max-w-5xl mx-auto">
      {/* Cart item details */}
      <div className=" max-w-xl py-16 ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {cartItems.map((item) => {
              const { category, image, name, price, qty } = item;
              return (
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={image} alt={name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {category}
                    </span>
                  </td>
                  <td>{qty}</td>
                  <th>
                    <p className="">₹ {price}</p>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Cart;
