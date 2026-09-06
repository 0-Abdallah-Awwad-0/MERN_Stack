import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container, Stack, Typography } from "@mui/material";
import DeleteButton from "../components/DeleteButton.jsx";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/members/${id}`)
      .then((res) => setMember(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!member) {
    return null;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Stack spacing={3}>
        <Typography variant="h5">
          Member name: {member.fullName}
        </Typography>
        <Typography variant="h5">Email: {member.email}</Typography>
        <Typography variant="h5">Details: {member.details}</Typography>

        <Stack direction="row" spacing={2}>
          <Button component={Link} to={`/editmember/${id}`} variant="outlined">
            Edit
          </Button>
          <DeleteButton memberId={id} successCallback={() => navigate("/")} />
          <Button component={Link} to="/" variant="outlined">
            Back To Dashboard
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Details;
