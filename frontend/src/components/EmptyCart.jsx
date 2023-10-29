import { Link } from "react-router-dom";
import BasketAnimation from "./BasketAnimation";

const EmptyCart = () => {
  return (
    <section className="w-[90%] max-w-5xl mx-auto flex flex-col items-center min-h-[90vh] pt-[4.5rem] ">
      <BasketAnimation />
      <h2 className="mb-5 text-2xl md:text-3xl">
        Your cart is feeling a bit lonely.
      </h2>
      <Link to="/products" className="btn btn-outline btn-secondary">
        Let's shop!
      </Link>
    </section>
  );
};
export default EmptyCart;
