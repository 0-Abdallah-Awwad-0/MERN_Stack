const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
  app.get("/api/jokes", JokeController.getAllJokes);

  // Keep this route before /api/jokes/:id.
  app.get("/api/jokes/random", JokeController.getRandomJoke);

  app.get("/api/jokes/:id", JokeController.getOneJoke);
  app.post("/api/jokes", JokeController.createJoke);
  app.put("/api/jokes/:id", JokeController.updateJoke);
  app.patch("/api/jokes/:id", JokeController.updateJoke);
  app.delete("/api/jokes/:id", JokeController.deleteJoke);
};
