import { useState } from "react";
import axios from "axios";

export default function ProductForm({ apiUrl, onProductCreated }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();
    setErrors({});
    try {
      const res = await axios.post(`${apiUrl}/api/products`, {
        title,
        price: Number(price),
        description
      });
      onProductCreated(res.data);
      setTitle("");
      setPrice("");
      setDescription("");
    } catch (err) {
      setErrors(err.response?.data?.errors || {});
      if (!err.response?.data?.errors) console.error(err);
    }
  };

  return (
    <form onSubmit={submitHandler} className="product-form">
      <div><label>Title</label><input value={title} onChange={(e) => setTitle(e.target.value)} />{errors.title && <p className="error">{errors.title}</p>}</div>
      <div><label>Price</label><input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} />{errors.price && <p className="error">{errors.price}</p>}</div>
      <div><label>Description</label><textarea value={description} onChange={(e) => setDescription(e.target.value)} />{errors.description && <p className="error">{errors.description}</p>}</div>
      <button type="submit">Create Product</button>
    </form>
  );
}
