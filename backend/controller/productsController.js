const productsModel = require("../models/productModel");

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await productsModel.find({});
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
    res.status(200).json(singleProduct);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllProducts, getSingleProduct };
