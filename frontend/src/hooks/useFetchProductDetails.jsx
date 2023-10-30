import { useEffect, useReducer } from "react";
import axios from "axios";
import productDetailsReducer from "../reducers/productDetailsReducer";

const initialState = {
  loading: false,
  error: false,
  productDetails: {},
};

const useFetchProductDetails = (productId, key) => {
  const [state, dispatch] = useReducer(productDetailsReducer, initialState);

  const fetchProductDetails = async () => {
    dispatch({ type: "FETCH_LOADING" });
    try {
      const response = await axios.get(`/api/products/${productId}`);
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [productId, key]);

  return state;
};
export default useFetchProductDetails;
