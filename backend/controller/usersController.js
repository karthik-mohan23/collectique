const UserModel = require("../models/userModel");

// @desc    Fetch all users
// @route   GET /api/admin/users
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
// @route   DELETE /api/admin/users/:id
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

module.exports = { deleteUser, getAllUsers };
