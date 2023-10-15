const OrderModel = require("../models/orderModel");

const placeOrder = async (req, res) => {
  try {
    // Get userId from the authenticated user
    const userId = req.user._id;

    // Get order details from the request body
    console.log(req);
    const { orderItems, shippingAddress, paymentMethod, totalPrice } = req.body;

    // Create a new order object with userId, order items, and isDelivered set to false
    const newOrder = {
      user: userId,
      orderItems: orderItems,
      shippingAddress: shippingAddress,
      paymentMethod: paymentMethod,
      totalPrice,
      isDelivered: false,
    };

    // Save the new order to the database using your OrderModel
    const createdOrder = await OrderModel.create(newOrder);

    res.status(201).json(createdOrder);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Oops, couldn't place the order." });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const allOrders = await OrderModel.find({});
    if (allOrders) {
      res.json(allOrders);
    }
  } catch (error) {
    res.status(400).json({ message: "Oops, something went wrong." });
  }
};

module.exports = { placeOrder, getAllOrders };
