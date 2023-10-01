const router = require("express").Router();

const {
  getAllProducts,
  getSingleProduct,
} = require("../controller/productsController");

// to get all products
router.get("/", getAllProducts);

// to get single product
router.get("/:id", getSingleProduct);

module.exports = router;
