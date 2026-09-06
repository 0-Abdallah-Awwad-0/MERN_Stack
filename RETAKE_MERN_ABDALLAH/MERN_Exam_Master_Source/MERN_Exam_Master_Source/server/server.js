const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/mongoose.config");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/appointment.routes")(app);

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
