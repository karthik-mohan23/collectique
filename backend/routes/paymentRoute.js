const router = require("express").Router();

// Import your payment controllers
const { pay, verifyPayment } = require("../controller/paymentController");

// Define your payment routes
router.post("/", pay);
router.post("/verify", verifyPayment);

module.exports = router;
