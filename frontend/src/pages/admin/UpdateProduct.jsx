const UpdateProduct = () => {
  return (
    <div className="w-full">
      <div className="w-[90%]  mx-auto  min-h-[80vh] pt-10 pb-20">
        <form className="flex flex-col gap-2 p-10 rounded-2xl max-w-3xl mx-auto shadow-2xl">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="input"
              placeholder="name"
              className="input input-bordered"
              name="name"
              value={updateProductData.name}
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
              value={updateProductData.seller}
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
              value={updateProductData.category}
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
              value={updateProductData.description}
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
              value={updateProductData.price}
              onChange={handleDataChange}
              required
            />
          </div>
          <div className="form-control w-full max-w-xs mb-6">
            <label className="label">
              <span className="label-text">Assured</span>
            </label>
            <input
              type="checkbox"
              className="checkbox"
              name="assured"
              checked={updateProductData.assured}
              onChange={handleDataChange}
            />
          </div>
          <div className="form-control w-full max-w-xs mb-6">
            <label className="label">
              <span className="label-text">In stock?</span>
            </label>
            <input
              type="checkbox"
              className="checkbox"
              name="countInStock"
              checked={updateProductData.countInStock}
              onChange={handleDataChange}
            />
          </div>

          <div className="form-control w-full max-w-xs mb-6">
            <label className="label">
              <span className="label-text">Upload image</span>
            </label>
            <input
              type="file"
              className="file-input w-full max-w-xs"
              onChange={handleUploadImage}
            />
          </div>

          <div className="form-control mt-4">
            <button
              className="btn btn-secondary "
              onClick={handleUpdatedProductDataSubmit}>
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateProduct;
