const CarController = require("../controllers/car.controller");

module.exports = (app) => {
  app.get("/api/cars", CarController.findCars);
  app.get("/api/cars/:id", CarController.getCarById);
  app.post("/api/cars", CarController.createCar);
  app.put("/api/cars/:id", CarController.updateCar);
  app.delete("/api/cars/:id", CarController.deleteCar);
};
