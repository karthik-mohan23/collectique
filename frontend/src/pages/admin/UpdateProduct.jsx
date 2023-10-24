import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchProductDetails from "../../hooks/useFetchProductDetails";
import { Error, Loader } from "../../components";
import axios from "axios";

const UpdateProduct = () => {
  const [updateProductData, setUpdateProductData] = useState({
    name: "",
    seller: "",
    category: "",
    description: "",
    price: 0,
    assured: false,
    countInStock: false,
    image: "",
  });

  const { productId } = useParams();
  const { loading, error, productDetails } = useFetchProductDetails(productId);

  useEffect(() => {
    if (productDetails) {
      setUpdateProductData({
        name: productDetails.name,
        seller: productDetails.seller,
        category: productDetails.category,
        description: productDetails.description,
        price: productDetails.price,
        assured: productDetails.assured,
        countInStock: productDetails.countInStock,
        image: productDetails.image,
      });
    }
  }, [productDetails]);

  const handleDataChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setUpdateProductData({ ...updateProductData, [name]: checked });
    } else {
      setUpdateProductData({ ...updateProductData, [name]: value });
    }
  };
  const handleUploadImage = async (e) => {
    const file = e.target.files[0]; // Get the selected file
    console.log(file);
    if (file) {
      // Create a new FormData object to send only the image
      const formData = new FormData();
      formData.append("image", file);
      console.log(formData, "formData");

      try {
        const response = await axios.post("/api/upload", formData);
        console.log("Image uploaded successfully!");
        // Update the product data with the selected image
        console.log(response);
        setUpdateProductData({
          ...updateProductData,
          image: response.data.image,
        });
      } catch (error) {
        console.error("An error occurred while uploading the image:", error);
      }
    }
  };
  const handleUpdatedProductDataSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `/api/products/${productId}`,
        updateProductData
      );

      if (response.status === 201) {
        console.log("Product created successfully!");
        console.log(response);
        setUpdateProductData({
          name: "",
          seller: "",
          category: "",
          description: "",
          price: 0,
          assured: false,
          rating: 0,
          numReviews: 0,
          countInStock: false,
          image: null,
        });
      } else {
        console.error("Failed to create the product");
      }
    } catch (error) {
      console.error("An error occurred while creating the product:", error);
    }
  };

  console.log(updateProductData);

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
