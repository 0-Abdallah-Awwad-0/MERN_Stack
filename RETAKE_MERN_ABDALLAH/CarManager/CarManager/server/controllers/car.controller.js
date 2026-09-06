const Car = require("../models/car.model");

const findCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    res.json(car);
  } catch (err) {
    res.status(400).json(err);
  }
};

const createCar = async (req, res) => {
  try {
    const car = await Car.create(req.body);
    res.json(car);
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json(car);
  } catch (err) {
    res.status(400).json(err);
  }
};

const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    res.json(car);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  findCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
