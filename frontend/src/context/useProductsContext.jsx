import { createContext, useContext, useEffect, useReducer } from "react";
import productsReducer from "../reducers/productsReducer";
import axios from "axios";

const initialState = {
  loading: false,
  error: false,
  products: [],
};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: "FETCH_LOADING" });
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
