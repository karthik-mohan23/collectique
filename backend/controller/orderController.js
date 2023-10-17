const OrderModel = require("../models/orderModel");

const placeOrder = async (req, res) => {
  console.log(req);
  try {
    // Get userId from the authenticated user
    const userId = req.user._id;

    // Get order details from the request body

    const { cartItems, shippingAddress, paymentMethod, totalPrice } = req.body;
    console.log(cartItems);

    // Create a new order object with userId, order items, and isDelivered set to false
    const newOrder = {
      user: userId,
      cartItems,
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

const getMyOrders = async (req, res) => {
  try {
    const userId = req.user._id;
    const myOrders = await OrderModel.find({ user: userId });
    if (myOrders) {
      res.status(200).json(myOrders);
    } else {
      res.status(401).json({ message: "No orders found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong." });
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

module.exports = { placeOrder, getAllOrders, getMyOrders };
