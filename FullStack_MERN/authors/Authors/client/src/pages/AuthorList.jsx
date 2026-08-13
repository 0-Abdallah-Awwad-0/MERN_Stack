import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const API_URL = "http://localhost:8000";

function AuthorList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/authors`)
      .then((res) => setAuthors(res.data.authors))
      .catch((err) => console.log(err));
  }, []);

  const deleteAuthor = (id) => {
    axios
      .delete(`${API_URL}/api/authors/${id}`)
      .then(() => setAuthors(authors.filter((author) => author._id !== id)))
      .catch((err) => console.log(err));
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Box>
          <Typography variant="h3">Favorite Authors</Typography>
          <Typography color="text.secondary">
            We have quotes by:
          </Typography>
        </Box>
        <Button component={Link} to="/authors/new" variant="contained">
          Add an author
        </Button>
      </Box>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Author</strong></TableCell>
              <TableCell align="right"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authors.map((author) => (
              <TableRow key={author._id}>
                <TableCell>{author.name}</TableCell>
                <TableCell align="right">
                  <Button component={Link} to={`/authors/${author._id}/edit`}>
                    Edit
                  </Button>
                  <Button color="error" onClick={() => deleteAuthor(author._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default AuthorList;
