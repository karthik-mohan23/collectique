import { Error, Loader, Modal } from "../../components";
import { useProductsContext } from "../../context/useProductsContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

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
    console.log("clicked");
    window.location.reload();
  };

  return (
    <section className="">
      <div className="w-[90%] max-w-5xl mx-auto min-h-screen pt-10">
        <div className="flex justify-center">
          <Link to="create-product" className="btn btn-primary mb-10">
            Add new product
          </Link>
        </div>

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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                const { name, category, price, updatedAt, user, _id } = product;
                return (
                  <tr key={_id}>
                    <th>{index + 1}</th>
                    <td className="hover:text-secondary-content duration-300">
                      <Link to={`${_id}`}>{name}</Link>
                    </td>

                    <td>{category}</td>
                    <td>₹{price}</td>
                    <td>{user.name}</td>
                    <td>{new Date(updatedAt).toString()}</td>
                    <td>
                      <Link to="update-product">
                        <AiFillEdit
                          size={16}
                          className="cursor-pointer hover:text-blue-500 duration-300"
                        />
                      </Link>
                    </td>
                    <td>
                      <AiFillDelete
                        size={16}
                        className="cursor-pointer hover:text-red-500 duration-300"
                        onClick={handleModel}
                      />
                      {/* modal */}
                      <Modal
                        title="Delete this product?"
                        message="Press Confirm to delete this product?"
                        onConfirm={handleDelete}
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
export default ProductManagement;
