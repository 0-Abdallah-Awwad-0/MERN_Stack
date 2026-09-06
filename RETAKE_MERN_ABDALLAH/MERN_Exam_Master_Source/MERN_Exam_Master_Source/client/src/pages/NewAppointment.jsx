import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import AppointmentForm from "../components/AppointmentForm.jsx";
import useForm from "../hooks/useForm.js";

const NewAppointment = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const { values, handleChange, resetForm } = useForm({
    title: "",
    email: "",
    category: "",
    priority: "",
    date: "",
    time: "",
    details: "",
    completed: false,
  });

  const createAppointment = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/appointments", values)
      .then(() => {
        resetForm();
        navigate("/");
      })
      .catch((err) => {
        setErrors(err.response?.data?.errors || {});
      });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        New Appointment
      </Typography>

      <AppointmentForm
        values={values}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={createAppointment}
        cancel={() => navigate("/")}
        submitText="Create"
      />
    </Container>
  );
};

export default NewAppointment;
