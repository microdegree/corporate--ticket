const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a course title"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  department: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: [true, "Please add a category"],
  },
  phone: {
    type: String,
    maxlength: [20, "Phone number can not be longer than 20 characters"],
    default: "",
  },
  photo: {
    type: String,
    default: "/uploads/no-photo.jpg",
  },
  ward: {
    type: String,
    required: [true, "Please add Ward"],
  },
  issue: {
    type: String,
    required: [true, "Please add Issue Date"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  address: {
    type: String,
    required: [true, "Please add Address"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// // Reverse populate with virtuals
// UserSchema.virtual("doctor", {
//   ref: "Doctor",
//   localField: "_id",
//   foreignField: "user",
//   justOne: false,
// });

module.exports = mongoose.model("Complaint", ComplaintSchema);
