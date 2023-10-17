import { useEffect, useReducer } from "react";
import axios from "axios";
import myOrdersReducer from "../reducers/myOrdersReducer";

const initialState = {
  loading: false,
  error: false,
  myOrders: [],
};

const useFetchMyOrders = (userId) => {
  const [state, dispatch] = useReducer(myOrdersReducer, initialState);

  const fetchMyOrders = async () => {
    dispatch({ type: "FETCH_LOADING" });
    try {
      const response = await axios.get(`/api/orders/${userId}`);
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
    }
  };

  useEffect(() => {
    fetchMyOrders();
  }, [userId]);

  return state;
};
export default useFetchMyOrders;
