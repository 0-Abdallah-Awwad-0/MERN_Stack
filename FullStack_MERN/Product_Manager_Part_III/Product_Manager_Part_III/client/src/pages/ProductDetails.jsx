import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import DeleteButton from "../components/DeleteButton.jsx";

const API_URL = "http://localhost:8000";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/products/${id}`)
      .then((res) => setProduct(res.data.product))
      .catch(() => navigate("/"));
  }, [id, navigate]);

  if (!product) {
    return null;
  }

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Button component={Link} to="/" sx={{ mb: 2 }}>Home</Button>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" mb={3}>{product.title}</Typography>
        <Typography mb={2}>Price: ${product.price}</Typography>
        <Typography mb={3}>
          Description: {product.description || "-"}
        </Typography>
        <Box>
          <Button component={Link} to={`/${product._id}/edit`}>
            Edit
          </Button>
          <DeleteButton
            productId={product._id}
            successCallback={() => navigate("/")}
          />
        </Box>
      </Paper>
    </Container>
  );
}

export default ProductDetails;
