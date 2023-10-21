const router = require("express").Router();
// to protect routes
const { protect, admin } = require("../middlewares/authMiddleware");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productsController");

// to get all products
router.get("/", getAllProducts);

// to get single product
router.get("/:id", getSingleProduct);
router.post("/", protect, admin, createProduct);
router.put("/:id", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

module.exports = router;
