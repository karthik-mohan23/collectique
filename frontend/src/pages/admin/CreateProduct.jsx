import { useState } from "react";

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    seller: "",
    category: "",
    description: "",
    price: 0,
    assured: false,
    rating: 0,
    numReviews: 0,
    countInStock: false,
    image: "",
  });

  const handleDataChange = () => {
    console.log("changing");
  };

  const handleProductDataSubmit = () => {
    console.log("submitted");
  };

  return (
    <div className="w-full">
      <div className="w-[90%]  mx-auto  min-h-[80vh] pb-44">
        <form className="flex flex-col gap-2 p-10 max-w-3xl mx-auto mt-20 shadow-2xl">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="input"
              placeholder="name"
              className="input input-bordered"
              name="name"
              value={productData.name}
              onChange={handleDataChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller</span>
            </label>
            <input
              type="input"
              placeholder="seller"
              className="input input-bordered"
              name="seller"
              value={productData.seller}
              onChange={handleDataChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="input"
              placeholder="category"
              className="input input-bordered"
              name="category"
              value={productData.category}
              onChange={handleDataChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="input"
              placeholder="description"
              className="input input-bordered"
              name="description"
              value={productData.description}
              onChange={handleDataChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="price"
              className="input input-bordered"
              name="price"
              value={productData.price}
              onChange={handleDataChange}
              required
            />
          </div>
          <div className="form-control w-full max-w-xs mb-6">
            <label className="label">
              <span className="label-text">Assured</span>
            </label>
            <input type="checkbox" className="checkbox" />
          </div>
          <div className="form-control w-full max-w-xs mb-6">
            <label className="label">
              <span className="label-text">In stock?</span>
            </label>
            <input type="checkbox" className="checkbox" />
          </div>
          <div className="form-control w-full max-w-xs mb-6">
            <label className="label">
              <span className="label-text">Upload image</span>
            </label>
            <input type="file" className="file-input w-full max-w-xs" />
          </div>

          <div className="form-control mt-4">
            <button
              className="btn btn-secondary "
              onClick={handleProductDataSubmit}>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateProduct;
