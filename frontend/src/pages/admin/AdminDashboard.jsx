import { Link } from "react-router-dom";
import { Error, Loader } from "../../components";
import { useAppOrdersContext } from "../../context/useAppOrdersContext";
import { useAppUsersContext } from "../../context/useAppUsersContext";
// products
import { useProductsContext } from "../../context/useProductsContext";
import { useEffect } from "react";

const AdminDashboard = () => {
  // Users
  const { appUsersLoading, appUsersError, appUsers } = useAppUsersContext();
  // Orders
  const { appOrdersLoading, appOrdersError, appOrders } = useAppOrdersContext();
  // products
  const {
    loading: productsLoading,
    error: productsError,
    products: allProducts,
  } = useProductsContext();

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
        <div className="w-[90%] max-w-2xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 pt-40 ">
          {/* users */}
          <Link to="/admin/active-users">
            <div className=" h-32 rounded-xl bg-yellow-300  text-black text-2xl flex justify-center items-center hover:bg-yellow-500 duration-300 hover:cursor-pointer">
              {activeUsers.length > 1
                ? `${activeUsers.length} Active users`
                : `${activeUsers.length} Active user`}
            </div>
          </Link>

          {/* Admin users */}
          <Link to="/admin/admin-users">
            <div className=" h-32 rounded-xl bg-violet-400  text-black text-2xl flex justify-center items-center hover:bg-violet-300 duration-300 hover:cursor-pointer">
              {adminUsers.length > 1
                ? `${adminUsers.length} Admin users`
                : `${adminUsers.length} Admin user`}
            </div>
          </Link>

          {/* orders */}
          <Link to="/admin/order-records">
            <div className="h-32 rounded-xl bg-pink-500  text-black text-2xl flex justify-center items-center hover:bg-pink-300 duration-300 hover:cursor-pointer">
              {pendingOrders.length === 0
                ? `All orders delivered`
                : pendingOrders.length === 1
                ? `${pendingOrders.length} order pending`
                : `${pendingOrders.length} orders pending`}
            </div>
          </Link>

          {/* products */}
          <Link to="/admin/product-management">
            <div className="h-32 rounded-xl bg-green-400  text-black text-2xl flex justify-center items-center hover:bg-green-300 duration-300 hover:cursor-pointer">
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
