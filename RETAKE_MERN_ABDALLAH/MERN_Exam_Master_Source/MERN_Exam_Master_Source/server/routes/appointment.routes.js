const AppointmentController = require("../controllers/appointment.controller");

module.exports = (app) => {
  app.get("/api/appointments", AppointmentController.findAppointments);
  app.get("/api/appointments/:id", AppointmentController.getAppointmentById);
  app.post("/api/appointments", AppointmentController.createAppointment);
  app.put("/api/appointments/:id", AppointmentController.updateAppointment);
  app.delete("/api/appointments/:id", AppointmentController.deleteAppointment);
};
