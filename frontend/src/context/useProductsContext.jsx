import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
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
  const [query, setQuery] = useState("");
  let url = "/api/products";
  if (query) {
    url += `?q=${query}`;
  }

  const fetchProducts = async () => {
    dispatch({ type: "FETCH_LOADING" });
    try {
      const response = await axios.get(url);
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [query]);

  return (
    <ProductsContext.Provider
      value={{ ...state, dispatch, fetchProducts, query, setQuery }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
