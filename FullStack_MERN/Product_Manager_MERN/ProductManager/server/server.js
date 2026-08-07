const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectToDatabase = require("./config/mongoose.config");

const app = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173"
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Product Manager API is running"
  });
});

require("./routes/product.routes")(app);

app.use((req, res) => {
  res.status(404).json({
    message: `Route ${req.method} ${req.originalUrl} was not found`
  });
});

const startServer = async () => {
  try {
    await connectToDatabase();

    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("The server could not start:", error.message);
    process.exit(1);
  }
};

startServer();
