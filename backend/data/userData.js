const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },
  {
    name: "Karthik",
    email: "karthik@email.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false,
  },
];

module.exports = users;
