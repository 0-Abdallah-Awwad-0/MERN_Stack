import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Paper, Typography } from "@mui/material";
import ProductForm from "../components/ProductForm.jsx";
import ProductList from "../components/ProductList.jsx";

const API_URL = "http://localhost:8000";

function Main() {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}/api/products`)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const createProduct = (product) => {
    setErrors({});

    axios
      .post(`${API_URL}/api/products`, product)
      .then((res) => setProducts([res.data.product, ...products]))
      .catch((err) => {
        const responseErrors = err.response?.data?.errors || {};
        setErrors({
          title: responseErrors.title?.message,
          price: responseErrors.price?.message,
        });
      });
  };

  const removeFromDom = (productId) => {
    setProducts(products.filter((product) => product._id !== productId));
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h3" align="center" mb={4}>
        Product Manager
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" mb={3}>Create Product</Typography>
        <ProductForm
          initialTitle=""
          initialPrice=""
          initialDescription=""
          onSubmitProp={createProduct}
          buttonText="Create"
          errors={errors}
        />
      </Paper>

      <ProductList products={products} removeFromDom={removeFromDom} />
    </Container>
  );
}

export default Main;
