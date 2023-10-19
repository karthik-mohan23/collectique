import { AiFillDelete } from "react-icons/ai";
import { Error, Loader } from "../../components";
import { useProductsContext } from "../../context/useProductsContext";
import { useEffect } from "react";

const ProductManagement = () => {
  const { loading, error, products } = useProductsContext();

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  const handleModel = () => {
    document.getElementById("my_modal_2").showModal();
  };
  useEffect(() => {
    handleModel;
  }, [handleModel]);

  const handleDelete = () => {
    window.location.reload();
  };

  return (
    <section className="">
      <div className="w-[90%] max-w-5xl mx-auto min-h-screen pt-20">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Created By</th>
                <th>Date Modified</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                const { name, category, price, updatedAt, user, _id } = product;
                return (
                  <tr key={_id}>
                    <th>{index + 1}</th>

                    <td>{name}</td>
                    <td>{category}</td>
                    <td>₹{price}</td>
                    <td>{user.name}</td>
                    <td>{new Date(updatedAt).toString()}</td>
                    <td>
                      <AiFillDelete
                        size={16}
                        className="cursor-pointer hover:text-red-500 duration-300"
                        onClick={handleModel}
                      />
                      <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">
                            Delete this product?
                          </h3>
                          <p className="py-4">
                            Press Confirm to delete this product
                          </p>
                          <button
                            className="btn btn-outline btn-error"
                            onClick={handleDelete}>
                            Confirm
                          </button>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                          <button>Close</button>
                        </form>
                      </dialog>
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
export default ProductManagement;
