const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
  Product.find()
    .sort({ createdAt: -1 })
    .then((products) => res.json({ products }))
    .catch((err) => res.status(400).json(err));
};

module.exports.findOneProduct = (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json({ product });
    })
    .catch(() => res.status(404).json({ message: "Product not found" }));
};

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((product) => res.status(201).json({ product }))
    .catch((err) => res.status(400).json(err));
};

module.exports.updateProduct = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json({ product });
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json({ product });
    })
    .catch(() => res.status(404).json({ message: "Product not found" }));
};
