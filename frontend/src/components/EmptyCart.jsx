import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="w-[90%] max-w-5xl mx-auto grid place-content-center min-h-[80vh]">
      <h2 className="mb-10 text-4xl">Your cart is empty.</h2>
      <Link to="/" className="btn btn-outline btn-secondary">
        See all products
      </Link>
    </section>
  );
};
export default EmptyCart;
