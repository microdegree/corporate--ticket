const express = require("express");

const { protect } = require("../middleware/auth");
const {
  getComplaints,
  getComplaintsAll,
  addComplaint,
  updateComplaint,
  deleteComplaint,
  complaintPhotoUpload,
} = require("../controllers/complaint");

const router = express.Router({ mergeParams: true });

router.route("/").get(protect, getComplaints).post(protect, addComplaint);
router.route("/all").get(getComplaintsAll);
router
  .route("/:id")
  .put(protect, updateComplaint)
  .delete(protect, deleteComplaint);

router.route("/photo").post(protect, complaintPhotoUpload);
module.exports = router;
