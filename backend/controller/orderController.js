const OrderModel = require("../models/orderModel");

const placeOrder = async (req, res) => {
  try {
    //get userId
    const { _id: userId } = req.user;
    //get order details
    const order = req.body;
    // create new order
    const newOrder = { ...userId, order, isDelivered: false };
    // save new order to DB
    await OrderModel.create(newOrder);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: "Oops, couldn't place order." });
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
