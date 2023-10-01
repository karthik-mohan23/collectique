// dotenv
require("dotenv").config();

const express = require("express");
const app = express();

// database
const configDB = require("./config/db");
configDB();

// routes
const productsRoute = require("./routes/productsRoute");

app.get("/", (req, res) =>
  res.send(`server listening on PORT ${process.env.PORT}`)
);

app.use("/api/products", productsRoute);

app.listen(process.env.PORT, () => console.log("server up"));
