import { useSelector } from "react-redux";
import { EmptyCart } from "../components";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const { cartItems } = useSelector((store) => store.cart);

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="w-[90%] max-w-5xl mx-auto py-16 flex flex-wrap-reverse justify-between ">
      {/* Cart item details */}
      <div className="w-[90%] overflow-x-auto max-w-xl  ">
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
                    <p className="">₹{price}</p>
                  </th>
                  <th>
                    <AiFillDelete
                      size={18}
                      className="cursor-pointer hover:text-accent-focus"
                    />
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Price details */}
      <div className="w-80 p-8 border border-primary-content mx-auto lg:mx-0 mb-14">
        <div className="flex justify-between">
          <p>Price(1 item)</p>
          <p>₹12435</p>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between">
          <p>Delivery Charges</p>
          <p>
            ₹<del>40</del> Free
          </p>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between">
          <h3 className="font-extrabold text-xl">Total amount</h3>
          <p className="font-semibold text-xl">₹53463</p>
        </div>
      </div>
    </div>
  );
};
export default Cart;
