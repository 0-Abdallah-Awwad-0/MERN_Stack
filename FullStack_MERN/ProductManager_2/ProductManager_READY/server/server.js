const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/mongoose.config");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/product.routes")(app);

app.get("/", (req, res) => res.json({ message: "Product Manager API is running" }));

connectDB()
  .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  });
