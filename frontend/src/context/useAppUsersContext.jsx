import { createContext, useContext, useEffect, useReducer } from "react";
import appUsersReducer from "../reducers/appUsersReducer";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";

const AppUsersContext = createContext();

const initialState = {
  appUsersLoading: false,
  appUsersError: false,
  appUsers: [],
};

export const AppUsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appUsersReducer, initialState);

  const { user } = useAuthContext();
  const fetchAppUsers = async () => {
    // Check if the user is an admin
    if (user && user.isAdmin) {
      dispatch({ type: "FETCH_LOADING" });
      try {
        const response = await axios.get("/api/users");
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    } else {
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
