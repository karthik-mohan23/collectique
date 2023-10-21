const productsModel = require("../models/productModel");

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await productsModel.find({}).populate("user", "name");
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
    const singleProduct = await productsModel.findById(req.params.id);
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
  const { newProduct } = req.body;

  if (newProduct) {
    res.status(400).json({ message: "Fill all fields" });
  }

  try {
    const createdProduct = await product.create(newProduct);
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      image,
      seller,
      category,
      countInStock,
      numReviews,
      description,
      assured,
      rating,
    } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name;
      product.price = price;
      product.description = description;
      product.image = image;
      product.seller = seller;
      product.category = category;
      product.countInStock = countInStock;
      product.numReviews = numReviews;
      product.assured = assured;
      product.rating = rating;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

// @desc    Delete single product by id
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = async (req, res, next) => {
  try {
    const singleProduct = await productsModel.findByIdAndDelete(req.params.id);
    if (singleProduct) {
      res.status(200).json(singleProduct);
    } else {
      res.status(400).json({ message: "Cannot find product" });
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
