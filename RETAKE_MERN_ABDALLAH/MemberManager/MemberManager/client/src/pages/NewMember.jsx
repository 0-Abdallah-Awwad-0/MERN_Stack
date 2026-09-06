import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import useForm from "../hooks/useForm.js";

const NewMember = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const { values, handleChange, resetForm } = useForm({
    fullName: "",
    email: "",
    gender: "",
    details: "",
  });

  const createMember = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/members", values)
      .then(() => {
        resetForm();
        navigate("/");
      })
      .catch((err) => {
        setErrors(err.response?.data?.errors || {});
      });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        New Member
      </Typography>

      <Box component="form" onSubmit={createMember}>
        <TextField
          fullWidth
          label="Member Full Name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          error={Boolean(errors.fullName)}
          helperText={errors.fullName?.message}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
          sx={{ mb: 2 }}
        />

        <FormControl error={Boolean(errors.gender)} sx={{ mb: 2 }}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="gender" value={values.gender} onChange={handleChange}>
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
            <FormControlLabel
              value="Prefer not to say"
              control={<Radio />}
              label="Prefer not to say"
            />
          </RadioGroup>
          {errors.gender && (
            <Typography color="error" variant="caption">
              {errors.gender.message}
            </Typography>
          )}
        </FormControl>

        <TextField
          fullWidth
          multiline
          rows={4}
          label="Details"
          name="details"
          value={values.details}
          onChange={handleChange}
          error={Boolean(errors.details)}
          helperText={errors.details?.message}
          sx={{ mb: 2 }}
        />

        <Button type="submit" variant="contained" sx={{ mr: 2 }}>
          Submit
        </Button>
        <Button type="button" variant="outlined" onClick={() => navigate("/")}>
          Cancel
        </Button>
      </Box>
    </Container>
  );
};

export default NewMember;
