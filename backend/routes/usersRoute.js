const router = require("express").Router();

const { getAllUsers, deleteUser } = require("../controller/usersController");

router.get("/", getAllUsers);

router.delete("/:id", deleteUser);

module.exports = router;
