require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/mongoose.config");
const authorRoutes = require("./routes/author.routes");

const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase();

app.use("/api/authors", authorRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});