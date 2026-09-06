import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteButton from "./DeleteButton.jsx";

const MemberList = ({ members, deleteMember, changeAttendance }) => {
  const presentMembers = members.filter((member) => member.attendance === "Present");

  const renderRows = (list, showCheckbox) =>
    list.map((member) => (
      <TableRow key={member._id}>
        {showCheckbox && (
          <TableCell padding="checkbox">
            <Checkbox
              checked={member.attendance === "Present"}
              onChange={() => changeAttendance(member)}
            />
          </TableCell>
        )}
        <TableCell>
          <Link to={`/member/${member._id}`}>{member.fullName}</Link>
        </TableCell>
        <TableCell>{member.attendance}</TableCell>
        <TableCell>
          <DeleteButton memberId={member._id} successCallback={() => deleteMember(member._id)} />
        </TableCell>
      </TableRow>
    ));

  return (
    <>
      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell>Attendance</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderRows(members, true)}</TableBody>
        </Table>
      </TableContainer>

      <Button component={Link} to="/newmember" variant="contained" sx={{ mb: 2 }}>
        Add Member
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Attendance</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderRows(presentMembers, false)}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MemberList;
