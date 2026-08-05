const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

// Allows the server to read JSON data.
app.use(express.json());

// Connect to MongoDB.
require("./config/mongoose.config");

// Test route.
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

require("./routes/user.routes")(app);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
