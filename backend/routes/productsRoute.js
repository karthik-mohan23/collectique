const router = require("express").Router();
const productsModel = require("../models/productModel");

// to get all products
router.get("/", async (req, res, next) => {
  try {
    const allProducts = await productsModel.find({});
    res.status(200).json(allProducts);
  } catch (error) {
    console.log(error);
  }
});

// to get single product
router.get("/:id", async (req, res, next) => {
  try {
    const singleProduct = await productsModel.findById(req.params.id);
    res.status(200).json(singleProduct);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
