import axios from "axios";
import { Button } from "@mui/material";

const API_URL = "http://localhost:8000";

function DeleteButton({ productId, successCallback }) {
  const deleteProduct = () => {
    axios
      .delete(`${API_URL}/api/products/${productId}`)
      .then(() => successCallback())
      .catch((err) => console.log(err));
  };

  return (
    <Button color="error" onClick={deleteProduct}>
      Delete
    </Button>
  );
}

export default DeleteButton;
