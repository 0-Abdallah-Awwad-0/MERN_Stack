const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
      minlength: [5, "Name must contain 5 characters!"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email should be valid and unique"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: ["Male", "Female", "Prefer not to say"],
    },
    details: {
      type: String,
      required: [true, "Details are required"],
      minlength: [20, "Details should be at least 20 characters"],
    },
    attendance: {
      type: String,
      enum: ["Present", "Absent"],
      default: "Absent",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", MemberSchema);
