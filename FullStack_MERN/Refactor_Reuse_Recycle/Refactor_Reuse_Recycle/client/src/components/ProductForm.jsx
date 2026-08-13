import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

function ProductForm({
  initialTitle,
  initialPrice,
  initialDescription,
  onSubmitProp,
  buttonText,
  errors,
}) {
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ title, price, description });
  };

  return (
    <Box component="form" onSubmit={onSubmitHandler}>
      <TextField
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={Boolean(errors.title)}
        helperText={errors.title}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        error={Boolean(errors.price)}
        helperText={errors.price}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={3}
        sx={{ mb: 3 }}
      />
      <Button type="submit" variant="contained">
        {buttonText}
      </Button>
    </Box>
  );
}

export default ProductForm;
