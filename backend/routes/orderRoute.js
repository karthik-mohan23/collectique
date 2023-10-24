const router = require("express").Router();
const {
  placeOrder,
  getMyOrders,
  getAllOrders,
  updateOrderToDelivered,
} = require("../controller/orderController");
const { protect, admin } = require("../middlewares/authMiddleware");

// to post orders
router.post("/", protect, placeOrder);

// to get orders of a user
router.get("/:id", protect, getMyOrders);

router.get("/", protect, admin, getAllOrders);

// to update isDeliverd
router.put("/:id/deliver", protect, admin, updateOrderToDelivered);

module.exports = router;
