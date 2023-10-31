// const mongoose = require("mongoose");
// dotenv
require("dotenv").config();
// database
const configDB = require("./config/db");
configDB();
const usersData = require("./data/userData");
const productsData = require("./data/productsData");
const userModel = require("./models/userModel");
const productsModel = require("./models/productModel");
const orderModel = require("./models/orderModel");

//to seed data to DB
const seedData = async () => {
  try {
    // first clear all data from DB
    await userModel.deleteMany();
    await productsModel.deleteMany();
    await orderModel.deleteMany();

    // add data
    // seed users
    const seedUsers = await userModel.insertMany(usersData);
    // to get admin user
    const adminUser = seedUsers[0]._id;
    // add amin user to each product
    // const adminAddedProducts = productsData.map((product) => {
    //   return { ...product, user: adminUser };
    // });
    // seed this products data to DB
    // await productsModel.insertMany(adminAddedProducts);
    console.log("Data Seeded to DB");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// to clear data from DB
const clearData = async () => {
  try {
    await userModel.deleteMany();
    await productsModel.deleteMany();
    await orderModel.deleteMany();

    console.log("Database cleared");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// to invoke either of this functions
if (process.argv[2] === "-d") {
  clearData();
} else {
  seedData();
}
