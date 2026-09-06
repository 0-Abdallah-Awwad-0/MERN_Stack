import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import DeleteButton from "./DeleteButton.jsx";
import useToggle from "../hooks/useToggle.js";

const AppointmentList = ({ appointments, setAppointments }) => {
  const [search, setSearch] = useState("");
  const { value: showCompleted, toggle: toggleShowCompleted } = useToggle(true);

  const removeFromList = (id) => {
    setAppointments(appointments.filter((appointment) => appointment._id !== id));
  };

  const toggleCompleted = (appointment) => {
    axios
      .put(`http://localhost:8000/api/appointments/${appointment._id}`, {
        ...appointment,
        completed: !appointment.completed,
      })
      .then((res) => {
        setAppointments(
          appointments.map((item) =>
            item._id === appointment._id ? res.data : item
          )
        );
      })
      .catch(console.error);
  };

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.title.toLowerCase().includes(search.toLowerCase()) ||
      appointment.category.toLowerCase().includes(search.toLowerCase());

    const matchesCompleted = showCompleted || !appointment.completed;

    return matchesSearch && matchesCompleted;
  });

  return (
    <>
      <TextField
        fullWidth
        label="Search by title or category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />

      <FormControlLabel
        control={
          <Checkbox checked={showCompleted} onChange={toggleShowCompleted} />
        }
        label="Show completed"
        sx={{ mb: 2 }}
      />

      {filteredAppointments.length === 0 ? (
        <Typography>No appointments found.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Done</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredAppointments.map((appointment) => (
                <TableRow key={appointment._id}>
                  <TableCell>
                    <Checkbox
                      checked={appointment.completed}
                      onChange={() => toggleCompleted(appointment)}
                    />
                  </TableCell>
                  <TableCell>
                    <Link to={`/appointments/${appointment._id}`}>
                      {appointment.title}
                    </Link>
                  </TableCell>
                  <TableCell>{appointment.category}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>
                    <Button
                      component={Link}
                      to={`/appointments/${appointment._id}/edit`}
                      variant="outlined"
                      sx={{ mr: 1 }}
                    >
                      Edit
                    </Button>
                    <DeleteButton
                      id={appointment._id}
                      successCallback={() => removeFromList(appointment._id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default AppointmentList;
