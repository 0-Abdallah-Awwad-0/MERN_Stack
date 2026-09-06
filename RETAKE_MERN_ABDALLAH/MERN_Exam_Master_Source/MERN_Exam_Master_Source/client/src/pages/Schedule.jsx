import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Schedule = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/appointments")
      .then((res) => setAppointments(res.data))
      .catch(console.error);
  }, []);

  const scheduledAppointments = [...appointments]
    .filter((appointment) => !appointment.completed)
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Schedule
      </Typography>

      <Button component={Link} to="/" variant="outlined" sx={{ mb: 3 }}>
        Back To Dashboard
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scheduledAppointments.map((appointment) => (
              <TableRow key={appointment._id}>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>
                  <Link to={`/appointments/${appointment._id}`}>
                    {appointment.title}
                  </Link>
                </TableCell>
                <TableCell>{appointment.category}</TableCell>
                <TableCell>{appointment.priority}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Schedule;
