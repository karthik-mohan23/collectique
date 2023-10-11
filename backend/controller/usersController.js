const UserModel = require("../models/userModel");

const jwt = require("jsonwebtoken");

// @desc  Authenticate user & get token
// @route  POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // to make sure there is a user with this email in the DB
    const userExists = await UserModel.findOne({ email });

    // also check if entered password matches with the one in DB
    if (userExists && (await userExists.matchPassword(password))) {
      // generate token
      // takes in  object with a payload, secret, duration
      const token = jwt.sign(
        { userId: userExists._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      // set it as HTTP-Only cookie
      // name,value,options
      res.cookie("jwt", token, {
        //client side JS cannot access this - to reduce XSS attacks
        httpOnly: true,
        // only send over HTTPS
        // set to true during production
        secure: false,
        // restricts cookies to current site
        // reducing CSRF risks
        sameSite: "strict",
        // duration till it expires(ms)
        maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day,
      });

      res.json({
        _id: userExists._id,
        name: userExists.name,
        email: userExists.email,
        isAdmin: userExists.isAdmin,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

// @desc  Sign up user
// @route  POST /api/users
// @access  Public
const signUpUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user already exists
    const userExists = await UserModel.findOne({ email });

    // if user already exists
    if (userExists) {
      res.status(400).json({ message: "User already exists" });
    }

    // if user doesn't exist - create new user
    const newUser = await UserModel.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    });
  } catch (error) {
    res.status(401).json({ message: "Something went wrong." });
  }
};

// @desc  Logout user & clear cookie
// @route  POST /api/users/logout
// @access  Private
const logoutUser = async (req, res) => {
  //to get rid of JWT cookie
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
};

// @desc    Fetch all users
// @route   GET /api/users
// @access  Private - Admin
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    res.json({ message: "Something went wrong" });
  }
};

// @desc    Delete user by id
// @route   DELETE /api/users/:id
// @access  Private - Admin
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deleteUser = await UserModel.findByIdAndDelete(userId);
    if (deleteUser) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.json({ message: "Something went wrong" });
  }
};

module.exports = {
  loginUser,
  signUpUser,
  logoutUser,
  deleteUser,
  getAllUsers,
};
