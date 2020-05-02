const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Complaints = require("../models/Complaint");

// @desc      Get complaints
// @route     GET /api/v1/complaint
// @access    Private
exports.getComplaints = asyncHandler(async (req, res, next) => {
  const complaints = await Complaints.find({ user: req.user.id }).populate({
    path: "department",
  });

  return res.status(200).json({
    success: true,
    count: complaints.length,
    data: complaints,
  });
});
// @desc      Get complaints
// @route     GET /api/v1/complaint/all
// @access    Public
exports.getComplaintsAll = asyncHandler(async (req, res, next) => {
  const complaints = await Complaints.find().populate({
    path: "department",
  });

  return res.status(200).json({
    success: true,
    count: complaints.length,
    data: complaints,
  });
});

// @desc      Add complaint
// @route     POST api/v1/complaints
// @access    Private
exports.addComplaint = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;
  const complaint = await Complaints.create(req.body);
  res.status(200).json({
    success: true,
    data: complaint,
  });
});

// @desc      Update complaint
// @route     PUT /api/v1/complaints/:id
// @access    Private
exports.updateComplaint = asyncHandler(async (req, res, next) => {
  let complaint = await Complaints.findById(req.params.id);

  if (!complaint) {
    return next(
      new ErrorResponse(`No complaint with the id of ${req.params.id}`),
      404
    );
  }

  // Make sure user is complaint owner
  if (complaint.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update complaint ${complaint._id}`,
        401
      )
    );
  }

  complaint = await Complaints.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: complaint,
  });
});

// @desc      Delete complaint
// @route     DELETE /api/v1/complaint/:id
// @access    Private
exports.deleteComplaint = asyncHandler(async (req, res, next) => {
  const complaint = await Complaints.findById(req.params.id);

  if (!complaint) {
    return next(
      new ErrorResponse(`No complaint with the id of ${req.params.id}`),
      404
    );
  }

  // Make sure user is complaint owner
  if (complaint.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete complaint ${complaint._id}`,
        401
      )
    );
  }
  await complaint.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      Upload photo for complaint
// @route     POST /api/v1/complaint/photo
// @access    Private
exports.complaintPhotoUpload = asyncHandler(async (req, res, next) => {
  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const file = req.files.file;

  // Make sure the image is a photo
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }

  file.mv(
    `${__dirname}/../../frontend/public/uploads/${file.name}`,
    async (err) => {
      if (err) {
        console.error(err);
        return next(new ErrorResponse(`Problem with file upload`, 500));
      }

      const files = `/uploads/${file.name}`;

      res.status(200).json({
        success: true,
        data: files,
      });
    }
  );
});
