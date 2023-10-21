import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";

const AdminRoute = () => {
  const { user } = useAuthContext();
  return user && user.isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
};
export default AdminRoute;
