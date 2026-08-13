const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/mongoose.config");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/author.routes")(app);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Authors server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server could not start:", error.message);
  }
};

startServer();
