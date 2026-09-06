import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import AppointmentList from "../components/AppointmentList.jsx";

const Main = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/appointments")
      .then((res) => setAppointments(res.data))
      .catch(console.error);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Appointment Manager
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Button component={Link} to="/new" variant="contained" sx={{ mr: 2 }}>
          Add Appointment
        </Button>
        <Button component={Link} to="/schedule" variant="outlined">
          View Schedule
        </Button>
      </Box>

      <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </Container>
  );
};

export default Main;
