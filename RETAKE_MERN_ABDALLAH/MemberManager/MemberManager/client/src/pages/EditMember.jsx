import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
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

const EditMember = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/members/${id}`)
      .then((res) => {
        setFullName(res.data.fullName);
        setEmail(res.data.email);
        setGender(res.data.gender);
        setDetails(res.data.details);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateMember = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/members/${id}`, {
        fullName,
        email,
        gender,
        details,
      })
      .then(() => navigate(`/member/${id}`))
      .catch((err) => setErrors(err.response?.data?.errors || {}));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Edit Member
      </Typography>

      <Box component="form" onSubmit={updateMember}>
        <TextField
          fullWidth
          label="Member Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          error={Boolean(errors.fullName)}
          helperText={errors.fullName?.message}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
          sx={{ mb: 2 }}
        />

        <FormControl error={Boolean(errors.gender)} sx={{ mb: 2 }}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup value={gender} onChange={(e) => setGender(e.target.value)}>
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
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          error={Boolean(errors.details)}
          helperText={errors.details?.message}
          sx={{ mb: 2 }}
        />

        <Button type="submit" variant="contained" sx={{ mr: 2 }}>
          Edit
        </Button>
        <Button type="button" variant="outlined" onClick={() => navigate(`/member/${id}`)}>
          Cancel
        </Button>
      </Box>
    </Container>
  );
};

export default EditMember;
