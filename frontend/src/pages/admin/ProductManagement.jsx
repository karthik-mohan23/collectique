import { Error, Loader } from "../../components";
import { useProductsContext } from "../../context/useProductsContext";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import axios from "axios";

const ProductManagement = () => {
  const { loading, error, products, fetchProducts } = useProductsContext();

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(`/api/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="">
      <div className="w-[90%] max-w-5xl mx-auto min-h-screen pt-10 pb-20">
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
                const {
                  name,
                  category,
                  price,
                  updatedAt,
                  user,
                  _id: productId,
                } = product;

                return (
                  <tr key={productId}>
                    <th>{index + 1}</th>
                    <td className="text-secondary font-semibold hover:text-primary duration-300">
                      <Link to={`${productId}`}>{name}</Link>
                    </td>
                    <td>{category}</td>
                    <td>₹{price}</td>
                    <td>{user.name}</td>
                    <td>{new Date(updatedAt).toString()}</td>
                    <td>
                      <Link to={`update-product/${productId}`}>
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
                        onClick={() => handleDelete(productId)}
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
