import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import DeleteButton from "../components/DeleteButton.jsx";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/appointments/${id}`)
      .then((res) => setAppointment(res.data))
      .catch(console.error);
  }, [id]);

  if (!appointment) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" sx={{ mb: 3 }}>
            {appointment.title}
          </Typography>
          <Typography sx={{ mb: 1 }}>Email: {appointment.email}</Typography>
          <Typography sx={{ mb: 1 }}>Category: {appointment.category}</Typography>
          <Typography sx={{ mb: 1 }}>Priority: {appointment.priority}</Typography>
          <Typography sx={{ mb: 1 }}>Date: {appointment.date}</Typography>
          <Typography sx={{ mb: 1 }}>Time: {appointment.time}</Typography>
          <Typography sx={{ mb: 1 }}>
            Status: {appointment.completed ? "Completed" : "Scheduled"}
          </Typography>
          <Typography sx={{ mb: 3 }}>Details: {appointment.details}</Typography>

          <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
            <Button
              component={Link}
              to={`/appointments/${id}/edit`}
              variant="contained"
            >
              Edit
            </Button>
            <DeleteButton id={id} successCallback={() => navigate("/")} />
            <Button component={Link} to="/" variant="outlined">
              Back
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Details;
