import { Error, Loader, ProductCards } from "../components";
import { useProductsContext } from "../context/useProductsContext";

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
  return (
    <section>
      <div className="w-[90%] px-7 max-w-5xl mx-auto py-10">
        <div className="flex justify-between items-center gap-8">
          <p className="text-2xl font-semibold">
            Products <span className="opacity-60">({products.length}) </span>
          </p>
          <div className=" flex-1 h-[0.5px] bg-gray-400 opacity-60"></div>
          <div>
            <select className="select select-bordered">
              <option disabled selected>
                sort by
              </option>
              <option>Best selling</option>
              <option>Alphabetically (A-Z)</option>
              <option>Alphabetically (Z-A)</option>
              <option>Price (low to high)</option>
              <option>Price (high to low)</option>
            </select>
          </div>
        </div>
        {/* cards */}
        <div className="hidden sm:flex gap-4   my-5">
          {cards.map((card) => {
            return (
              <div
                key={card}
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

        <ProductCards products={products} />
      </div>
    </section>
  );
};
export default Products;
