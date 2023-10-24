import { useState } from "react";
import { Error, Loader, ProductCards } from "../components";
import { useProductsContext } from "../context/useProductsContext";
import sale from "../assets/sale.png";

const cards = [
  {
    color: "from-yellow-300 to-yellow-200",
    text: "New Arrivals",
  },
  { color: "from-fuchsia-400 to-fuchsia-300", text: "Now Trending" },
  { color: "from-cyan-300 to-cyan-200", text: "Most Liked" },
];

const Products = () => {
  const { loading, error, products } = useProductsContext();

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  const [sort, setSort] = useState("");
  const [filteredProducts, setFilterProducts] = useState(products);

  const handleProductsSort = (e) => {
    const { value } = e.target;
    setSort(value); // Update sort state

    if (value === "best-selling") {
      setFilterProducts(products); // Set filtered products to the original array
    } else {
      // Clone the products array to avoid mutating the original array
      const sortedProducts = [...products];

      if (value === "a-z") {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (value === "z-a") {
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      } else if (value === "lowest") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (value === "highest") {
        sortedProducts.sort((a, b) => b.price - a.price);
      }
      // Update the filtered products state
      setFilterProducts(sortedProducts);
    }
  };

  return (
    <section>
      <div className="w-[90%] px-7 max-w-5xl mx-auto pb-10">
        <img src={sale} alt="sale" className="my-10 rounded-md " />
        <div className="flex justify-between items-center gap-8">
          <p className="text-2xl font-semibold flex-shrink-0">
            Products <span className="opacity-60">({products.length}) </span>
          </p>
          <div className="h-[0.5px] w-3/4 bg-gray-400 opacity-60"></div>
          <div>
            <select
              className="select select-bordered "
              name="sort"
              value={sort}
              onChange={handleProductsSort}>
              <option value="best-selling">Best selling</option>
              <option value="a-z">Alphabetically (A-Z)</option>
              <option value="z-a">Alphabetically (Z-A)</option>
              <option value="lowest">Price (low to high)</option>
              <option value="highest">Price (high to low)</option>
            </select>
          </div>
        </div>
        {/* cards */}
        <div className="hidden sm:flex gap-4   my-5">
          {cards.map((card) => {
            return (
              <div
                key={card.text}
                className={`w-40 py-5 bg-gradient-to-r ${card.color} rounded-lg`}>
                <div className="flex flex-col items-center">
                  <div className=" text-gray-900">
                    <p className="font-semibold">{card.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <ProductCards products={filteredProducts} />
      </div>
    </section>
  );
};
export default Products;
