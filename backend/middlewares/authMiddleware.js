//to verify token
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

//protect routes for users
const protect = async (req, res, next) => {
  //Read JWT from cookie
  let token = req.cookies.jwt;

  if (token) {
    try {
      // decode userId from token
      const { userId } = jwt.verify(token, process.env.JWT_SECRET);
      // find user from Users collection without password
      //add user to request object
      //set this user object to req object on all routes
      req.user = await UserModel.findById(userId).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized" });
    }
  } else {
    res.status(400).json({ message: "Not authorized" });
  }
};

//protect routes for admins
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({ message: "Not authorized as admin" });
  }
};

module.exports = { admin, protect };
