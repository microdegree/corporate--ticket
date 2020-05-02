const express = require("express");
const {
  getAllDepartment,
  getAllCitizen,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

const User = require("../models/Users");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router.use(protect);
router.use(authorize("admin"));

router.route("/").post(createUser);
router.route("/citizen").get(advancedResults(User), getAllCitizen);
router.route("/department").get(advancedResults(User), getAllDepartment);

router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
