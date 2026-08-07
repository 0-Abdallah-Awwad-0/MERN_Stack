import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./components/ProductForm.jsx";
import ProductList from "./components/ProductList.jsx";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/products`)
      .then((res) => setProducts(res.data.products))
      .catch(console.error);
  }, []);

  return (
    <main className="container">
      <h1>Product Manager</h1>
      <ProductForm apiUrl={API_URL} onProductCreated={(product) => setProducts((old) => [product, ...old])} />
      <hr />
      <ProductList products={products} />
    </main>
  );
}

export default App;
