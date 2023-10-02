import { useProductsContext } from "../context/allProductsContext";

const Products = () => {
  const { loading, error, products } = useProductsContext();

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }

  console.log(products);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ">
      {products.map((product) => {
        const { name, assured, image, price, rating } = product;
        return (
          <div className="w-60">
            <div>
              <img src={image} alt={name} />
              {assured ? <p>assured</p> : ""}
            </div>

            <h2>{name}</h2>
            <p>{price}</p>
            <p>{rating}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
