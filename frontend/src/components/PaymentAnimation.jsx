import Lottie from "lottie-react";
import paymentAnimation from "../assets/paymentAnimation.json";

const PaymentAnimation = () => {
  const style = {
    height: 300,
  };

  return <Lottie animationData={paymentAnimation} loop={false} style={style} />;
};
export default PaymentAnimation;
