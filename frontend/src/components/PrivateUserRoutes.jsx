import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";

const PrivateRoute = () => {
  const { user } = useAuthContext();
  return user?.name ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PrivateRoute;
