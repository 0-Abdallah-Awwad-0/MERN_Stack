import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";

const API_URL = "http://localhost:8000";

function EditAuthor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/authors/${id}`)
      .then((res) => setName(res.data.author.name))
      .catch(() => setNotFound(true));
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    setError("");

    axios
      .put(`${API_URL}/api/authors/${id}`, { name })
      .then(() => navigate("/authors"))
      .catch((err) => {
        if (err.response?.status === 404) {
          setNotFound(true);
        } else {
          setError(err.response?.data?.errors?.name?.message || "Unable to update author");
        }
      });
  };

  if (notFound) {
    return (
      <Container maxWidth="sm" sx={{ py: 5 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" mb={2}>
            We apologize, but we couldn't locate the author you're searching for.
          </Typography>
          <Typography mb={3}>
            Would you like to add this author to our database?
          </Typography>
          <Button component={Link} to="/authors/new" variant="contained">
            Add an author
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Typography variant="h3" mb={1}>Favorite Authors</Typography>
      <Button component={Link} to="/authors" sx={{ mb: 2 }}>
        Home
      </Button>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" mb={3}>Edit this author:</Typography>
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

export default EditAuthor;
