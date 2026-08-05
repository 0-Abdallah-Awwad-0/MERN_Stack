const User = require("../models/user.model");

// READ: Get all users
module.exports.findAllUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.json({ users });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

// READ: Get one user by ID
module.exports.findOneUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ user });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

// CREATE: Add a new user
module.exports.createUser = (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).json({ user });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

// UPDATE: Change an existing user
module.exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ user });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

// DELETE: Remove a user
module.exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({
        message: "User deleted successfully",
        user
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};