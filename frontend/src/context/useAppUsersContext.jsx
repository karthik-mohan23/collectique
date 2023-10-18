import { createContext, useContext, useEffect, useReducer } from "react";
import appUsersReducer from "../reducers/appUsersReducer";
import axios from "axios";

const AppUsersContext = createContext();

const initialState = {
  loading: false,
  error: false,
  appUsers: [],
};

export const AppUsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appUsersReducer, initialState);

  const fetchAppUsers = async () => {
    dispatch({ type: "FETCH_LOADING" });
    try {
      const response = await axios.get("/api/users");
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
    }
  };

  useEffect(() => {
    fetchAppUsers();
  }, []);

  return (
    <AppUsersContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppUsersContext.Provider>
  );
};

export const useAppUsersContext = () => useContext(AppUsersContext);
