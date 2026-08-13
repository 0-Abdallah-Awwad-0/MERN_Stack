import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";

const API_URL = "http://localhost:8000";

function NewAuthor() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setError("");

    axios
      .post(`${API_URL}/api/authors`, { name })
      .then(() => navigate("/authors"))
      .catch((err) => {
        setError(err.response?.data?.errors?.name?.message || "Unable to add author");
      });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Typography variant="h3" mb={1}>Favorite Authors</Typography>
      <Button component={Link} to="/authors" sx={{ mb: 2 }}>
        Home
      </Button>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" mb={3}>Add a new author:</Typography>
        <Box component="form" onSubmit={submitHandler}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={Boolean(error)}
            helperText={error}
            sx={{ mb: 3 }}
          />
          <Button type="submit" variant="contained" sx={{ mr: 1 }}>
            Submit
          </Button>
          <Button component={Link} to="/authors" variant="outlined">
            Cancel
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default NewAuthor;
