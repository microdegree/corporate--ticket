const ErrorResponse = require("../utils/errorResponse");
const Category = require("../models/Category");
const Complaints = require("../models/Complaint");

const asyncHandler = require("../middleware/async");

// @desc      Get orderd list
// @route     /api/v1/category/:id/complaint
// @access    Public
exports.getDeptComplaint = asyncHandler(async (req, res, next) => {
  const complaints = await Complaints.find({
    // status: "orderd",
    department: req.params.id,
  })
    .populate({
      path: "user",
    })
    .populate({
      path: "department",
    });

  return res.status(200).json({
    success: true,
    count: complaints.length,
    data: complaints,
  });
  // }
});

// @desc      Get category
// @route     GET /api/v1/category/
// @access    Public
exports.getCategories = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Add category
// @route     POST /api/v1/category/:id
// @access    Private
exports.addCategory = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;
  const category = await Category.create(req.body);
  res.status(201).json({
    success: true,
    data: category,
  });
});

// @desc      Delete Category
// @route     DELETE /api/v1/category/:id
// @access    Private
exports.deleteCategory = asyncHandler(async (req, res, next) => {
  try {
    let category = await Category.findById(req.params.id);
    if (!category) {
      return next(
        new ErrorResponse(`No Category with id ${req.params.id}`, 400)
      );
    }
    await Category.findByIdAndRemove(req.params.id);
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// // @desc      Get category
// // @route     GET /api/myapp/category/product
// // @access    Public
// exports.getProduct = asyncHandler(async (req, res, next) => {
//   res.status(200).json(res.advancedResults);
// });
