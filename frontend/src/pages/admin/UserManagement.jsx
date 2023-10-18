import { Error, Loader } from "../../components";
import { useAppUsersContext } from "../../context/useAppUsersContext";
import { AiFillDelete } from "react-icons/ai";

const UserManagement = () => {
  // Users
  const { appUsersLoading, appUsersError, appUsers } = useAppUsersContext();
  if (appUsersLoading) {
    return <Loader />;
  }
  if (appUsersError) {
    return <Error />;
  }
  const activeUsers = appUsers?.filter((user) => !user.isAdmin);

  if (activeUsers.length === 0) {
    return (
      <div className="w-[90%] max-w-5xl mx-auto grid place-content-center min-h-[80vh]">
        <h2 className="text-4xl">No active users</h2>
      </div>
    );
  }

  return (
    <section className="">
      <div className="w-[90%] max-w-5xl mx-auto min-h-screen pt-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-base-200">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {activeUsers.map((user, index) => {
                const { name, email } = user;
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      <AiFillDelete
                        size={16}
                        className="cursor-pointer hover:text-red-500 duration-300"
                      />
                    </td>
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
export default UserManagement;
