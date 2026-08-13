const Player = require("../models/player.model");

module.exports.findAllPlayers = (req, res) => {
  Player.find()
    .sort({ name: 1 })
    .then((players) => res.json({ players }))
    .catch((err) => res.status(400).json(err));
};

module.exports.createPlayer = (req, res) => {
  Player.create(req.body)
    .then((player) => res.status(201).json({ player }))
    .catch((err) => res.status(400).json(err));
};

module.exports.updatePlayer = (req, res) => {
  Player.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((player) => {
      if (!player) {
        return res.status(404).json({ message: "Player not found" });
      }
      res.json({ player });
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.deletePlayer = (req, res) => {
  Player.findByIdAndDelete(req.params.id)
    .then((player) => {
      if (!player) {
        return res.status(404).json({ message: "Player not found" });
      }
      res.json({ player });
    })
    .catch(() => res.status(404).json({ message: "Player not found" }));
};
