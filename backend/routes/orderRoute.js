const router = require("express").Router();
const {
  placeOrder,
  getMyOrders,
  getAllOrders,
} = require("../controller/orderController");
const { protect, admin } = require("../middlewares/authMiddleware");

// to post orders
router.post("/", protect, placeOrder);

// to get orders of a user
router.get("/:id", protect, getMyOrders);

router.get("/", protect, admin, getAllOrders);

module.exports = router;
