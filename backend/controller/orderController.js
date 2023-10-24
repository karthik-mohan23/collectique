const OrderModel = require("../models/orderModel");

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const placeOrder = async (req, res) => {
  try {
    // Get userId from the authenticated user
    const userId = req.user._id;

    // Get order details from the request body

    const { cartItems, shippingAddress, paymentMethod, totalPrice } = req.body;

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
    res.status(400).json({ message: "Oops, couldn't place the order." });
  }
};
// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private

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

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getAllOrders = async (req, res) => {
  try {
    const allOrders = await OrderModel.find({})
      .populate("user", "name")
      .sort({ createdAt: -1 });
    if (allOrders) {
      res.json(allOrders);
    } else {
      res.status(400).json({ message: "No orders found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Oops, something went wrong." });
  }
};

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = async (req, res) => {
  try {
    const order = await OrderModel.findById(req.params.id);

    if (order) {
      order.isDelivered = true;
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404);
      throw new Error("Order not found");
    }
  } catch (error) {
    res.status(400).json({ error: `error.message` });
  }
};

module.exports = {
  placeOrder,
  getAllOrders,
  getMyOrders,
  updateOrderToDelivered,
};
