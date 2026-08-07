import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

function App() {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadError, setLoadError] = useState("");

  const loadProducts = useCallback(async () => {
    setLoadingProducts(true);
    setLoadError("");

    try {
      const response = await axios.get(`${API_URL}/api/products`);
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
      setLoadError("Could not load products from the server.");
    } finally {
      setLoadingProducts(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const addProductToPage = (product) => {
    setProducts((currentProducts) => [product, ...currentProducts]);
  };

  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">MERN Stack Assignment</p>
        <h1>Product Manager</h1>
        <p>Create products and save them directly to MongoDB.</p>
      </header>

      <section className="layout">
        <ProductForm
          apiUrl={API_URL}
          onProductCreated={addProductToPage}
        />

        <ProductList
          products={products}
          loading={loadingProducts}
          error={loadError}
        />
      </section>
    </main>
  );
}

export default App;
