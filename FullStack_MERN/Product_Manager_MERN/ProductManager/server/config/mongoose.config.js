const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "MONGODB_URI is missing. Create server/.env from server/.env.example."
    );
  }

  await mongoose.connect(uri);
  console.log("Successfully connected to MongoDB");
};

module.exports = connectToDatabase;
