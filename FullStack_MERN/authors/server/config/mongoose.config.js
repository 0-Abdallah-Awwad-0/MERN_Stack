const mongoose = require("mongoose")
const connectToDatabase = async () => {
  await mongoose.connect (process.env.MONGODB_URI);
  console.log("Connected To MongoDB");
}
module.exports = connectToDatabase;