const express = require("express");
require("dotenv").config();

const connectToDatabase = require("./config/mongoose.config");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Jokes API is running",
    endpoints: {
      getAllJokes: "GET /api/jokes",
      getRandomJoke: "GET /api/jokes/random",
      getOneJoke: "GET /api/jokes/:id",
      createJoke: "POST /api/jokes",
      replaceJoke: "PUT /api/jokes/:id",
      updateJoke: "PATCH /api/jokes/:id",
      deleteJoke: "DELETE /api/jokes/:id"
    }
  });
});

require("./routes/joke.routes")(app);

app.use((req, res) => {
  res.status(404).json({
    message: `Route ${req.method} ${req.originalUrl} was not found`
  });
});

const startServer = async () => {
  try {
    await connectToDatabase();

    app.listen(port, () => {
      console.log(`Jokes API listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("The server could not start:", error.message);
    process.exit(1);
  }
};

startServer();
