const Appointment = require("../models/appointment.model");

const findAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    res.json(appointment);
  } catch (err) {
    res.status(400).json(err);
  }
};

const createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.json(appointment);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        errors: {
          email: { message: "Email must be unique" },
        },
      });
    }
    res.status(400).json(err);
  }
};

const updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.json(appointment);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        errors: {
          email: { message: "Email must be unique" },
        },
      });
    }
    res.status(400).json(err);
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    res.json(appointment);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  findAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
