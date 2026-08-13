import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import NavBar from "../components/NavBar.jsx";

const API_URL = "http://localhost:8000";

function AddPlayer() {
  const [name, setName] = useState("");
  const [preferredPosition, setPreferredPosition] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setError("");

    axios
      .post(`${API_URL}/api/players`, { name, preferredPosition })
      .then(() => navigate("/players/list"))
      .catch((err) => {
        setError(err.response?.data?.errors?.name?.message || "Unable to add player");
      });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <NavBar />
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" mb={3}>Add Player</Typography>
        <Box component="form" onSubmit={submitHandler}>
          <TextField
            fullWidth
            label="Player Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={Boolean(error)}
            helperText={error}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Preferred Position"
            value={preferredPosition}
            onChange={(e) => setPreferredPosition(e.target.value)}
            sx={{ mb: 3 }}
          />
          <Button type="submit" variant="contained" sx={{ mr: 1 }}>
            Add
          </Button>
          <Button component={Link} to="/players/list" variant="outlined">
            Cancel
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default AddPlayer;
