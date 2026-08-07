const Product = require("../models/product.model");

const formatValidationErrors = (error) => {
  if (error.name !== "ValidationError") {
    return null;
  }

  const errors = {};

  for (const field of Object.keys(error.errors)) {
    errors[field] = error.errors[field].message;
  }

  return errors;
};

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.json({ products });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Unable to retrieve products"
    });
  }
};

module.exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description
    });

    return res.status(201).json({ product });
  } catch (error) {
    const errors = formatValidationErrors(error);

    if (errors) {
      return res.status(400).json({
        message: "Validation failed",
        errors
      });
    }

    console.error(error);
    return res.status(500).json({
      message: "Unable to create the product"
    });
  }
};
