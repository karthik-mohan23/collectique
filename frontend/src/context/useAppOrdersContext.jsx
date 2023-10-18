import { createContext, useContext, useEffect, useReducer } from "react";
import appOrdersReducer from "../reducers/appOrdersReducer";
import axios from "axios";

const AppOrdersContext = createContext();

const initialState = {
  appOrdersLoading: false,
  appOrdersError: false,
  appOrders: [],
};

export const AppOrdersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appOrdersReducer, initialState);

  const fetchAppOrders = async () => {
    dispatch({ type: "FETCH_LOADING" });
    try {
      const response = await axios.get("/api/orders");
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
    }
  };

  useEffect(() => {
    fetchAppOrders();
  }, []);

  return (
    <AppOrdersContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppOrdersContext.Provider>
  );
};

export const useAppOrdersContext = () => useContext(AppOrdersContext);
