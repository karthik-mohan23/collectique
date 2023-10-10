// dotenv
require("dotenv").config();
// cookie-parser
const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();

// database
const configDB = require("./config/db");

// cors
const cors = require("cors");
app.use(cors());

// middleware to parse requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// to parse cookie from request object
// allows to access req.cookies
app.use(cookieParser());

// routes
const productsRoute = require("./routes/productsRoute");
const usersRoute = require("./routes/usersRoute");

app.get("/", (req, res) =>
  res.send(`server listening on PORT ${process.env.PORT}`)
);

app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);

app.listen(process.env.PORT, () => {
  configDB();
  console.log("server up");
});
