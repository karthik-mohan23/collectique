const router = require("express").Router();

const { pay, verifyPayment } = require("../controller/paymentController");

router.post("/", pay);
router.post("/verify", verifyPayment);

module.exports = router;
