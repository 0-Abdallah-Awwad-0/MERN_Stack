import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container, Paper, Typography } from "@mui/material";
import ProductForm from "../components/ProductForm.jsx";

const API_URL = "http://localhost:8000";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}/api/products/${id}`)
      .then((res) => setProduct(res.data.product))
      .catch(() => navigate("/"));
  }, [id, navigate]);

  const updateProduct = (updatedProduct) => {
    setErrors({});

    axios
      .put(`${API_URL}/api/products/${id}`, updatedProduct)
      .then(() => navigate(`/products/${id}`))
      .catch((err) => {
        const responseErrors = err.response?.data?.errors || {};
        setErrors({
          title: responseErrors.title?.message,
          price: responseErrors.price?.message,
        });
      });
  };

  if (!product) {
    return null;
  }

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Button component={Link} to="/" sx={{ mb: 2 }}>Home</Button>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" mb={3}>Update Product</Typography>
        <ProductForm
          initialTitle={product.title}
          initialPrice={product.price}
          initialDescription={product.description}
          onSubmitProp={updateProduct}
          buttonText="Update"
          errors={errors}
        />
      </Paper>
    </Container>
  );
}

export default Update;
