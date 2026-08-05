const mongoose = require("mongoose");
const Joke = require("../models/joke.model");

const buildErrorResponse = (error) => {
  if (error.name === "ValidationError") {
    const errors = {};

    for (const field of Object.keys(error.errors)) {
      errors[field] = error.errors[field].message;
    }

    return {
      status: 400,
      body: {
        message: "Validation failed",
        errors
      }
    };
  }

  if (error instanceof mongoose.Error.CastError) {
    return {
      status: 400,
      body: {
        message: "The supplied joke ID is invalid"
      }
    };
  }

  return {
    status: 500,
    body: {
      message: "An unexpected server error occurred"
    }
  };
};

const sendError = (res, error) => {
  console.error(error);
  const response = buildErrorResponse(error);
  return res.status(response.status).json(response.body);
};

module.exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find().sort({ createdAt: -1 });
    return res.json({ jokes });
  } catch (error) {
    return sendError(res, error);
  }
};

module.exports.getOneJoke = async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);

    if (!joke) {
      return res.status(404).json({ message: "Joke not found" });
    }

    return res.json({ joke });
  } catch (error) {
    return sendError(res, error);
  }
};

module.exports.getRandomJoke = async (req, res) => {
  try {
    const [joke] = await Joke.aggregate([{ $sample: { size: 1 } }]);

    if (!joke) {
      return res.status(404).json({
        message: "No jokes are available yet"
      });
    }

    return res.json({ joke });
  } catch (error) {
    return sendError(res, error);
  }
};

module.exports.createJoke = async (req, res) => {
  try {
    const joke = await Joke.create(req.body);
    return res.status(201).json({ joke });
  } catch (error) {
    return sendError(res, error);
  }
};

module.exports.updateJoke = async (req, res) => {
  try {
    const joke = await Joke.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!joke) {
      return res.status(404).json({ message: "Joke not found" });
    }

    return res.json({ joke });
  } catch (error) {
    return sendError(res, error);
  }
};

module.exports.deleteJoke = async (req, res) => {
  try {
    const joke = await Joke.findByIdAndDelete(req.params.id);

    if (!joke) {
      return res.status(404).json({ message: "Joke not found" });
    }

    return res.json({
      message: "Joke deleted successfully",
      joke
    });
  } catch (error) {
    return sendError(res, error);
  }
};
