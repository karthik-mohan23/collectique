import { useParams } from "react-router-dom";
import useFetchProductDetails from "../hooks/useFetchProductDetails";

const ProductDetails = () => {
  // const { id } = useParams();

  const { loading, error, productDetails } = useFetchProductDetails(
    "6517b4188256c329125ef489"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error..</div>;
  }

  console.log(productDetails);

  return <div>ProductDetails</div>;
};
export default ProductDetails;
