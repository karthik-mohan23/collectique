// dotenv
require("dotenv").config();
// cookie-parser
const cookieParser = require("cookie-parser");
const path = require("path");

const express = require("express");
const app = express();

// database
const configDB = require("./config/db");

// middleware to parse requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// to parse cookie from request object
// allows to access req.cookies
app.use(cookieParser());
// to access images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// routes
const productsRoute = require("./routes/productsRoute");
const usersRoute = require("./routes/usersRoute");
const orderRoute = require("./routes/orderRoute");
// upload routes
const uploadRoutes = require("./routes/uploadRoutes");

app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);
app.use("/api/orders", orderRoute);
app.use("/api/upload", uploadRoutes);

app.listen(process.env.PORT, () => {
  configDB();
  console.log("server up");
});
