import { Link } from "react-router-dom";
import { Error, Loader } from "../../components";
import { useAppOrdersContext } from "../../context/useAppOrdersContext";
import { useAppUsersContext } from "../../context/useAppUsersContext";

const AdminDashboard = () => {
  // Users
  const { appUsersLoading, appUsersError, appUsers } = useAppUsersContext();
  if (appUsersLoading) {
    return <Loader />;
  }
  if (appUsersError) {
    return <Error />;
  }
  const activeUsers = appUsers?.filter((user) => !user.isAdmin);
  const adminUsers = appUsers?.filter((user) => user.isAdmin);
  // Orders
  const { appOrdersLoading, appOrdersError, appOrders } = useAppOrdersContext();
  if (appOrdersLoading) {
    return <Loader />;
  }
  if (appOrdersError) {
    return <Error />;
  }
  const pendingOrders = appOrders?.filter((order) => !order.isDelivered);

  return (
    <section className="min-h-screen ">
      <div className="w-[90%] max-w-2xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 pt-40 ">
        {/* users */}
        <Link to="/admin/active-users">
          <div className=" h-32 bg-yellow-300  text-black text-2xl flex justify-center items-center hover:bg-yellow-500 duration-300 hover:cursor-pointer">
            {activeUsers.length > 1
              ? `${activeUsers.length} Active users`
              : `${activeUsers.length} Active user`}
          </div>
        </Link>

        {/* Admin users */}
        <Link to="/admin/admin-users">
          <div className=" h-32 bg-violet-400  text-black text-2xl flex justify-center items-center hover:bg-violet-300 duration-300 hover:cursor-pointer">
            {adminUsers.length > 1
              ? `${adminUsers.length} Admin users`
              : `${adminUsers.length} Admin user`}
          </div>
        </Link>

        {/* orders */}
        <Link to="/admin/order-records">
          <div className="h-32 bg-pink-500  text-black text-2xl flex justify-center items-center hover:bg-pink-300 duration-300 hover:cursor-pointer">
            {pendingOrders.length === 0
              ? `All orders delivered`
              : pendingOrders.length === 1
              ? `${pendingOrders.length} order pending`
              : `${pendingOrders.length} orders pending`}
          </div>
        </Link>

        {/* products */}
        <Link to="/admin/product-management">
          <div className="h-32 bg-green-400  text-black text-2xl flex justify-center items-center hover:bg-green-300 duration-300 hover:cursor-pointer">
            Products
          </div>
        </Link>
      </div>
    </section>
  );
};
export default AdminDashboard;
