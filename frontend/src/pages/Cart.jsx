import { useSelector } from "react-redux";
import { EmptyCart } from "../components";

const Cart = () => {
  const { cartItems } = useSelector((store) => store.cart);

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return <div>Cart</div>;
};
export default Cart;
