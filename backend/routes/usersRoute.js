const router = require("express").Router();

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
router.get("/", getAllUsers);
router.delete("/:id", deleteUser);

module.exports = router;
