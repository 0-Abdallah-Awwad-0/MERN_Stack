const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "A joke setup is required"],
      minlength: [10, "The setup must be at least 10 characters long"],
      maxlength: [250, "The setup cannot exceed 250 characters"],
      trim: true
    },
    punchline: {
      type: String,
      required: [true, "A punchline is required"],
      minlength: [3, "The punchline must be at least 3 characters long"],
      maxlength: [250, "The punchline cannot exceed 250 characters"],
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Joke", JokeSchema);
