import { useState } from "react";
import axios from "axios";

const initialForm = {
  title: "",
  price: "",
  description: ""
};

function ProductForm({ apiUrl, onProductCreated }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: ""
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setErrors({});
    setMessage("");

    try {
      const response = await axios.post(`${apiUrl}/api/products`, {
        title: form.title,
        price: Number(form.price),
        description: form.description
      });

      onProductCreated(response.data.product);
      setForm(initialForm);
      setMessage("Product created successfully.");
    } catch (error) {
      console.error(error);

      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        setMessage("The product could not be created.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="card">
      <h2>Create a product</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            placeholder="Example: Laptop"
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <div className="field">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            placeholder="999.99"
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the product"
            rows="5"
          />
          {errors.description && (
            <p className="error">{errors.description}</p>
          )}
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? "Creating..." : "Create Product"}
        </button>

        {message && <p className="form-message">{message}</p>}
      </form>
    </section>
  );
}

export default ProductForm;
