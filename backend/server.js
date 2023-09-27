// dotenv
require("dotenv").config();

const express = require("express");
const app = express();

// database
const configDB = require("./config/db");
configDB();

app.get("/", (req, res) =>
  res.send(`server listening on PORT ${process.env.PORT}`)
);

app.listen(process.env.PORT, () => console.log("server up"));
