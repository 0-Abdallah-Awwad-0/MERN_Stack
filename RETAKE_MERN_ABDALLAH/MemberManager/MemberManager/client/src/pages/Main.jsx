import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import MemberList from "../components/MemberList.jsx";

const Main = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/members")
      .then((res) => setMembers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteMember = (id) => {
    setMembers(members.filter((member) => member._id !== id));
  };

  const changeAttendance = (member) => {
    const attendance = member.attendance === "Present" ? "Absent" : "Present";

    axios
      .put(`http://localhost:8000/api/members/${member._id}`, { attendance })
      .then((res) => {
        setMembers(
          members.map((item) => (item._id === member._id ? res.data : item))
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Member List
      </Typography>
      <MemberList
        members={members}
        deleteMember={deleteMember}
        changeAttendance={changeAttendance}
      />
    </Container>
  );
};

export default Main;
