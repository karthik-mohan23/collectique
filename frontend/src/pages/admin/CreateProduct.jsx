import axios from "axios";
import { useState } from "react";
import { useProductsContext } from "../../context/useProductsContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const { loading, error, products, fetchProducts } = useProductsContext();

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
    image: null,
  });

  const handleDataChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setProductData({ ...productData, [name]: checked });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const handleProductDataSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/products", productData);
      console.log(response);
      if (response.status === 201) {
        fetchProducts();

        try {
          await navigate("/admin/product-management");
        } catch (error) {
          console.error("Error navigating:", error);
        }

        toast.success("Product created successfully!");
        setProductData({
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
        toast.error("Failed to create the product");
      }
    } catch (error) {
      toast.error("An error occurred while creating the product");
    }
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      // Create a new FormData object to send only the image
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await axios.post("/api/upload", formData);
        toast.success("Image uploaded successfully!");
        // Update the product data with the selected image
        setProductData({ ...productData, image: response.data.image });
      } catch (error) {
        toast.error("An error occurred while uploading the image");
      }
    }
  };

  return (
    <div className="w-full">
      <div className="w-[90%]  mx-auto  min-h-[80vh] pt-10 pb-20">
        <form className="flex flex-col gap-2 p-10 rounded-2xl  max-w-3xl mx-auto  shadow-2xl">
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
            <input
              type="checkbox"
              className="checkbox"
              name="assured"
              checked={productData.assured}
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
              checked={productData.countInStock}
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
              onClick={handleProductDataSubmit}>
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateProduct;
