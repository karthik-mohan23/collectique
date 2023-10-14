const router = require("express").Router();
const { placeOrder, getAllOrders } = require("../controller/orderController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/", protect, placeOrder);

router.get("/", getAllOrders);

module.exports = router;
