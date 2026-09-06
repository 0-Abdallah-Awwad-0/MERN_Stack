import axios from "axios";
import Button from "@mui/material/Button";

const DeleteButton = ({ memberId, successCallback }) => {
  const deleteMember = () => {
    axios
      .delete(`http://localhost:8000/api/members/${memberId}`)
      .then(() => successCallback())
      .catch((err) => console.log(err));
  };

  return (
    <Button variant="outlined" color="error" onClick={deleteMember}>
      Delete
    </Button>
  );
};

export default DeleteButton;
