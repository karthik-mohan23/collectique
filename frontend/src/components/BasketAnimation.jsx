import Lottie from "lottie-react";
import emptyBasket from "../assets/emptyBasket.json";

const BasketAnimation = () => {
  const style = {
    height: 300,
  };

  return <Lottie animationData={emptyBasket} style={style} />;
};
export default BasketAnimation;
