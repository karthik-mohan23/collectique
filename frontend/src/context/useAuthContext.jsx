import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const userInfo = localStorage?.getItem("userDetails")
  ? JSON.parse(localStorage.getItem("userDetails"))
  : null;

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(userInfo);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
