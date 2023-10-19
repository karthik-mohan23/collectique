import { Error, Loader } from "../../components";
import { useProductsContext } from "../../context/useProductsContext";

const ProductManagement = () => {
  const { loading, error, products } = useProductsContext();

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  console.log(products);

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
                    <td>{price}</td>
                    <td>{user.name}</td>
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
export default ProductManagement;
