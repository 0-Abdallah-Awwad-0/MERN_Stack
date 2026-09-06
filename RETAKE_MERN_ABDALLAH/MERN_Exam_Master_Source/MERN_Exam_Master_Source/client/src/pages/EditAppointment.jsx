import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import AppointmentForm from "../components/AppointmentForm.jsx";
import useForm from "../hooks/useForm.js";

const EditAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const { values, setValues, handleChange } = useForm({
    title: "",
    email: "",
    category: "",
    priority: "",
    date: "",
    time: "",
    details: "",
    completed: false,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/appointments/${id}`)
      .then((res) => setValues(res.data))
      .catch(console.error);
  }, [id, setValues]);

  const updateAppointment = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/appointments/${id}`, values)
      .then(() => navigate(`/appointments/${id}`))
      .catch((err) => {
        setErrors(err.response?.data?.errors || {});
      });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Edit Appointment
      </Typography>

      <AppointmentForm
        values={values}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={updateAppointment}
        cancel={() => navigate(`/appointments/${id}`)}
        submitText="Save Changes"
      />
    </Container>
  );
};

export default EditAppointment;
