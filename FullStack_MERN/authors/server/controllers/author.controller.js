const Author = require("../models/author.model");

module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .sort({ name: 1 })
        .then((authors) => res.json(authors))
        .catch((err) => res.status(400).json(err));
};

module.exports.getOneAuthor = (req, res) => {
    Author.findById(req.params.id)
        .then((author) => res.json(author))
        .catch((err) => res.status(400).json(err));
};

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then((author) => res.json(author))
        .catch((err) => res.status(400).json(err));
};

module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
        .then((author) => res.json(author))
        .catch((err) => res.status(400).json(err));
};

module.exports.deleteAuthor = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then((author) => res.json(author))
        .catch((err) => res.status(400).json(err));
};