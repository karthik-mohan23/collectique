const router = require("express").Router();
// to protect routes
const { protect, admin } = require("../middlewares/authMiddleware");

const {
  loginUser,
  signUpUser,
  logoutUser,
  getAllUsers,
  deleteUser,
} = require("../controller/usersController");

router.post("/", signUpUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

// admin
router.get("/", protect, admin, getAllUsers);
router.delete("/:id", protect, admin, deleteUser);

module.exports = router;
