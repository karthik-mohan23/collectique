import { Error, Loader } from "../../components";
import { useAppUsersContext } from "../../context/useAppUsersContext";

const AdminManagement = () => {
  const { appUsersLoading, appUsersError, appUsers } = useAppUsersContext();
  if (appUsersLoading) {
    return <Loader />;
  }
  if (appUsersError) {
    return <Error />;
  }
  const adminUsers = appUsers?.filter((user) => user.isAdmin);

  if (adminUsers.length === 0) {
    return (
      <div className="w-[90%] max-w-5xl mx-auto grid place-content-center min-h-[80vh]">
        <h2 className="text-4xl">No Admin user</h2>
      </div>
    );
  }

  return (
    <section className="">
      <div className="w-[90%] max-w-3xl mx-auto min-h-screen pt-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-base-200 ">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Date Modified</th>
              </tr>
            </thead>
            <tbody>
              {adminUsers.map((user, index) => {
                const { name, email, _id, updatedAt } = user;
                return (
                  <tr key={_id}>
                    <th>{index + 1}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{new Date(updatedAt).toString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
export default AdminManagement;
