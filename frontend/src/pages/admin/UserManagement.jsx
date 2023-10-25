import axios from "axios";
import { Error, Loader, Modal } from "../../components";
import { useAppUsersContext } from "../../context/useAppUsersContext";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "sonner";

const UserManagement = () => {
  // Users
  const { appUsersLoading, appUsersError, appUsers, fetchAppUsers } =
    useAppUsersContext();
  if (appUsersLoading) {
    return <Loader />;
  }
  if (appUsersError) {
    return <Error />;
  }

  const handleModel = () => {
    document.getElementById("my_modal_2").showModal();
  };

  const handleDelete = async (userId, name) => {
    try {
      const response = await axios.delete(`/api/users/${userId}`);
      fetchAppUsers();
      toast.success(`User ${name} deleted`);
    } catch (error) {
      console.log(error);
      toast.error(`Couldn't delete User ${name}`);
    }
  };
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
                <th>Date Modified</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {activeUsers.map((user, index) => {
                const { name, email, _id: userId, updatedAt } = user;
                return (
                  <tr key={userId}>
                    <th>{index + 1}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{new Date(updatedAt).toString()}</td>
                    <td>
                      <AiFillDelete
                        size={16}
                        className="cursor-pointer hover:text-red-500 duration-300"
                        onClick={handleModel}
                      />
                      {/* modal */}
                      <Modal
                        title="Delete this user?"
                        message="Press Confirm to delete this user?"
                        onConfirm={() => handleDelete(userId, name)}
                        btnText="Confirm"
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
