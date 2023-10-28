import { Link } from "react-router-dom";
import { Error, Loader } from "../../components";
import { useAppOrdersContext } from "../../context/useAppOrdersContext";
import { useAppUsersContext } from "../../context/useAppUsersContext";
// products
import { useProductsContext } from "../../context/useProductsContext";
import { useEffect } from "react";

const AdminDashboard = () => {
  // Users
  const { appUsersLoading, appUsersError, appUsers, fetchAppUsers } =
    useAppUsersContext();
  // Orders
  const { appOrdersLoading, appOrdersError, appOrders, fetchAppOrders } =
    useAppOrdersContext();
  // products
  const {
    loading: productsLoading,
    error: productsError,
    products: allProducts,
    fetchProducts,
  } = useProductsContext();

  useEffect(() => {
    fetchAppOrders();
    fetchAppUsers();
    fetchProducts();
  }, []);

  if (appUsersLoading || appOrdersLoading || productsLoading) {
    return <Loader />;
  }

  if (appUsersError || appOrdersError || productsError) {
    return <Error />;
  }

  const activeUsers = appUsers?.filter((user) => !user.isAdmin);
  const adminUsers = appUsers?.filter((user) => user.isAdmin);
  const pendingOrders = appOrders?.filter((order) => !order.isDelivered);

  return (
    <section className="min-h-screen ">
      <div className="w-[90%] max-w-5xl mx-auto ">
        <div className="w-[90%] max-w-2xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 pt-20 pb-20 md:pt-40 md:pb-0 ">
          {/* users */}
          <Link to="/admin/active-users">
            <div className=" h-32 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg  text-white text-2xl flex justify-center items-center duration-1000 font-medium  hover:cursor-pointer">
              {activeUsers.length > 1
                ? `${activeUsers.length} Active users`
                : `${activeUsers.length} Active user`}
            </div>
          </Link>

          {/* Admin users */}
          <Link to="/admin/admin-users">
            <div className=" h-32 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800  text-white text-2xl flex justify-center items-center duration-1000 font-medium hover:cursor-pointer">
              {adminUsers.length > 1
                ? `${adminUsers.length} Admin users`
                : `${adminUsers.length} Admin user`}
            </div>
          </Link>

          {/* orders */}
          <Link to="/admin/order-records">
            <div className="h-32 rounded-xl bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800  text-white text-2xl flex justify-center items-center font-medium duration-1000 hover:cursor-pointer">
              {pendingOrders.length === 0
                ? `All orders delivered`
                : pendingOrders.length === 1
                ? `${pendingOrders.length} order pending`
                : `${pendingOrders.length} orders pending`}
            </div>
          </Link>

          {/* products */}
          <Link to="/admin/product-management">
            <div className="h-32 rounded-xl bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 text-white text-2xl flex justify-center items-center duration-1000 font-medium hover:cursor-pointer">
              {allProducts.length === 0
                ? `No products`
                : allProducts.length === 1
                ? `${allProducts.length} product`
                : `${allProducts.length} products`}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default AdminDashboard;
