const router = require("express").Router();
const productsModel = require("../models/productModel");

router.get("/", async (req, res, next) => {
  try {
    const allProducts = await productsModel.find({});
    res.status(200).json(allProducts);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
