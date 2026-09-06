const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Car name is required"],
      minlength: [2, "Car name must contain at least 2 characters"],
    },
    model: {
      type: String,
      required: [true, "Model is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [1, "Price must be greater than 0"],
    },
    currency: {
      type: String,
      required: [true, "Currency is required"],
      enum: ["USD", "EUR", "NIS"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    transmission: {
      type: String,
      required: [true, "Transmission is required"],
      enum: ["Manual", "Automatic"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", CarSchema);
