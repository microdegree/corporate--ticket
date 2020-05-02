const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const User = require("../models/Users");

// @desc      Get  user
// @route     GET /api/v1/auth/department
// @access    Private/Admin
exports.getAllDepartment = asyncHandler(async (req, res, next) => {
  const user = await User.find({ role: "department" });

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc      Get  user
// @route     GET /api/v1/users/citizen
// @access    Private/Admin
exports.getAllCitizen = asyncHandler(async (req, res, next) => {
  const user = await User.find({ role: "citizen" });

  res.status(200).json({
    success: true,
    data: user,
  });
});
// @desc      Create user
// @route     POST /api/v1/users
// @access    Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});

// @desc      Update user
// @route     PUT /api/myapp/users/:id
// @access    Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc      Delete user
// @route     DELETE /api/myapp/users/:id
// @access    Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});
