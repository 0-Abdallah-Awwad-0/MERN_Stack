import { useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const DeleteButton = ({ id, successCallback }) => {
  const [open, setOpen] = useState(false);

  const deleteAppointment = () => {
    axios
      .delete(`http://localhost:8000/api/appointments/${id}`)
      .then(() => {
        setOpen(false);
        successCallback();
      })
      .catch(console.error);
  };

  return (
    <>
      <Button color="error" variant="outlined" onClick={() => setOpen(true)}>
        Delete
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Delete Appointment</DialogTitle>
        <DialogContent>Are you sure you want to delete this item?</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button color="error" onClick={deleteAppointment}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteButton;
