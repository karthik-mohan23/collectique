const ProductsModel = require("../models/productModel");

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getAllProducts = async (req, res, next) => {
  const q = req.query.q
    ? {
        name: {
          $regex: req.query.q,
          $options: "i",
        },
      }
    : {};
  try {
    // populate user to get admin name
    const allProducts = await ProductsModel.find(q).populate("user", "name");

    res.status(200).json(allProducts);
  } catch (error) {
    console.log(error);
  }
};

// @desc    Fetch single product by id
// @route   GET /api/products/:id
// @access  Public
const getSingleProduct = async (req, res, next) => {
  try {
    const singleProduct = await ProductsModel.findById(req.params.id);
    if (singleProduct) {
      res.status(200).json(singleProduct);
    } else {
      res.status(400).json({ message: "Cannot find product" });
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = async (req, res) => {
  const {
    name,
    seller,
    category,
    description,
    price,
    assured,
    rating,
    numReviews,
    countInStock,
    image,
  } = req.body;
  // Convert assured and countInStock to booleans
  const assuredValue = assured === "true";
  const countInStockValue = countInStock === "true";

  const newProduct = new ProductsModel({
    user: req.user._id,
    name,
    seller,
    category,
    description,
    price,
    assured: assuredValue,
    rating,
    numReviews,
    countInStock: countInStockValue,
    image,
  });

  try {
    const saveNewProduct = await newProduct.save();
    res.status(201).json(saveNewProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = async (req, res) => {
  const {
    name,
    price,
    image,
    seller,
    category,
    countInStock,
    description,
    assured,
  } = req.body;

  // Convert assured and countInStock to booleans
  const assuredValue = assured === "true";
  const countInStockValue = countInStock === "true";

  try {
    const product = await ProductsModel.findById(req.params.id);

    if (product) {
      product.name = name;
      product.price = price;
      product.description = description;
      product.image = image;
      product.seller = seller;
      product.category = category;
      product.countInStock = countInStockValue; // Use the converted value
      product.assured = assuredValue; // Use the converted value

      const updatedProduct = await product.save();
      res.status(201).json(updatedProduct);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  } catch (error) {
    res.status(400).json({ error: "Something went wrong" });
  }
};

// @desc    Delete single product by id
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = async (req, res) => {
  try {
    const singleProduct = await ProductsModel.findByIdAndDelete(req.params.id);

    if (singleProduct) {
      res.status(200).json(singleProduct);
    } else {
      res.status(400).json({ message: "Cannot find product" });
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = async (req, res) => {
  const { rating, comment } = req.body;
  const productId = req.params.id;
  const currentUser = req.user;

  console.log(req.body, "body");
  console.log(req.params, "params");
  console.log(req.user, "user");

  try {
    const product = await ProductsModel.findById(productId);
    console.log(product, "product");
    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return;
    }

    const userAlreadyReviewed = product.reviews.some(
      // review.user might be an ObjectId while currentUser._id is a string
      (review) => review.user.toString() === currentUser._id.toString()
    );

    if (userAlreadyReviewed) {
      res.status(400).json({ error: "Product already reviewed" });
      return;
    }

    const newReview = {
      name: currentUser.name,
      rating: Number(rating),
      comment,
      user: currentUser._id,
    };

    product.reviews.push(newReview);
    product.numReviews = product.reviews.length;

    const totalRating = product.reviews.reduce(
      (acc, review) => acc + review.rating,
      0
    );
    product.rating = totalRating / product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
};
