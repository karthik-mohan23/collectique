import { useEffect, useReducer } from "react";
import axios from "axios";
import productDetailsReducer from "../reducers/productDetailsReducer";

const initialState = {
  loading: false,
  error: false,
  productDetails: {},
};

const useFetchProductDetails = (productId) => {
  const [state, dispatch] = useReducer(productDetailsReducer, initialState);

  const fetchProductDetails = async () => {
    dispatch({ type: "FETCH_LOADING" });
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/${productId}`
      );
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  return state;
};
export default useFetchProductDetails;
