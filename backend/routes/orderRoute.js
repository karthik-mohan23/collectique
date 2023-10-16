const router = require("express").Router();
const { placeOrder, getAllOrders } = require("../controller/orderController");
const { protect, admin } = require("../middlewares/authMiddleware");

router.post("/", protect, placeOrder);

router.get("/", protect, admin, getAllOrders);

module.exports = router;
