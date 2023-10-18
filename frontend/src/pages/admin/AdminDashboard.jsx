import { Error, Loader } from "../../components";
import { useAppUsersContext } from "../../context/useAppUsersContext";

const AdminDashboard = () => {
  const { loading, error, appUsers } = useAppUsersContext();
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  const activeUsers = appUsers?.filter((user) => !user.isAdmin);
  const adminUsers = appUsers?.filter((user) => user.isAdmin);

  return (
    <section className="min-h-screen ">
      <div className="w-[90%] max-w-2xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 pt-40 ">
        {/* users */}
        <div className=" h-32 bg-yellow-300  text-black text-2xl flex justify-center items-center hover:bg-yellow-500 duration-300 hover:cursor-pointer">
          <h3>
            {activeUsers.length > 1
              ? `${activeUsers.length} Active users`
              : `${activeUsers.length} Active user`}
          </h3>
        </div>
        {/* Admin users */}
        <div className=" h-32 bg-violet-500  text-black text-2xl flex justify-center items-center hover:bg-violet-300 duration-300 hover:cursor-pointer">
          <h3>
            {activeUsers.length > 1
              ? `${adminUsers.length} Admin users`
              : `${adminUsers.length} Admin user`}
          </h3>
        </div>
        {/* orders */}
        <div className="h-32 bg-pink-500  text-black text-2xl flex justify-center items-center hover:bg-pink-300 duration-300 hover:cursor-pointer">
          <h3>Orders</h3>
        </div>
        {/* products */}
        <div className="h-32 bg-green-400  text-black text-2xl flex justify-center items-center hover:bg-green-300 duration-300 hover:cursor-pointer">
          <h3>Products</h3>
        </div>
      </div>
    </section>
  );
};
export default AdminDashboard;
