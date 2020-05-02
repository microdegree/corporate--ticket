const express = require("express");

const router = express.Router();

const {
  getCategories,
  addCategory,
  deleteCategory,
  getDeptComplaint,
  getProduct,
} = require("../controllers/category");
const { protect, authorize } = require("../middleware/auth");
const advancedResults = require("../middleware/advancedResults");

const Category = require("../models/Category");
const Complaint = require("../models/Complaint");

router
  .route("/")
  .get(advancedResults(Category), getCategories)
  .post(protect, authorize("admin"), addCategory);

router.route("/:id").delete(protect, authorize("admin"), deleteCategory);

router
  .route("/:id/complaint")
  .get(advancedResults(Complaint), getDeptComplaint);

module.exports = router;
