const Author = require("../models/author.model");

module.exports.findAllAuthors = (req, res) => {
  Author.find()
    .sort({ name: 1 })
    .then((authors) => res.json({ authors }))
    .catch((err) => res.status(400).json(err));
};

module.exports.findOneAuthor = (req, res) => {
  Author.findById(req.params.id)
    .then((author) => {
      if (!author) {
        return res.status(404).json({ message: "Author not found" });
      }
      res.json({ author });
    })
    .catch(() => res.status(404).json({ message: "Author not found" }));
};

module.exports.createAuthor = (req, res) => {
  Author.create(req.body)
    .then((author) => res.status(201).json({ author }))
    .catch((err) => res.status(400).json(err));
};

module.exports.updateAuthor = (req, res) => {
  Author.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((author) => {
      if (!author) {
        return res.status(404).json({ message: "Author not found" });
      }
      res.json({ author });
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).json(err);
      }
      res.status(404).json({ message: "Author not found" });
    });
};

module.exports.deleteAuthor = (req, res) => {
  Author.findByIdAndDelete(req.params.id)
    .then((author) => {
      if (!author) {
        return res.status(404).json({ message: "Author not found" });
      }
      res.json({ author });
    })
    .catch(() => res.status(404).json({ message: "Author not found" }));
};
