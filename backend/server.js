// dotenv
require("dotenv").config();

const express = require("express");
const app = express();

// database
const configDB = require("./config/db");

// cors
const cors = require("cors");
app.use(cors());

// middleware to parse requests
app.use(express.json());

// routes
const productsRoute = require("./routes/productsRoute");
const usersRoute = require("./routes/usersRoute");

app.get("/", (req, res) =>
  res.send(`server listening on PORT ${process.env.PORT}`)
);

app.use("/api/products", productsRoute);
app.use("/api/admin/users", usersRoute);

app.listen(process.env.PORT, () => {
  configDB();
  console.log("server up");
});
