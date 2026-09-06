import axios from "axios";
import Button from "@mui/material/Button";

const DeleteButton = ({ carId, successCallback, children }) => {
  const deleteCar = () => {
    axios
      .delete(`http://localhost:8000/api/cars/${carId}`)
      .then(() => successCallback())
      .catch((err) => console.log(err));
  };

  return (
    <Button variant="outlined" color="error" onClick={deleteCar}>
      {children}
    </Button>
  );
};

export default DeleteButton;
