import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import NavBar from "../components/NavBar.jsx";

const API_URL = "http://localhost:8000";

function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [playerToDelete, setPlayerToDelete] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/players`)
      .then((res) => setPlayers(res.data.players))
      .catch((err) => console.log(err));
  }, []);

  const deletePlayer = () => {
    axios
      .delete(`${API_URL}/api/players/${playerToDelete._id}`)
      .then(() => {
        setPlayers(players.filter((player) => player._id !== playerToDelete._id));
        setPlayerToDelete(null);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <NavBar />
      <Typography variant="h4" mb={2}>Player List</Typography>

      <Button component={Link} to="/players/addplayer" variant="contained" sx={{ mb: 3 }}>
        Add Player
      </Button>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Team Name</strong></TableCell>
              <TableCell><strong>Preferred Position</strong></TableCell>
              <TableCell align="right"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player) => (
              <TableRow key={player._id}>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.preferredPosition || "-"}</TableCell>
                <TableCell align="right">
                  <Button color="error" onClick={() => setPlayerToDelete(player)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Dialog open={Boolean(playerToDelete)} onClose={() => setPlayerToDelete(null)}>
        <DialogTitle>Delete Player</DialogTitle>
        <DialogContent>
          Are you sure you want to remove {playerToDelete?.name} from the team?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPlayerToDelete(null)}>Cancel</Button>
          <Button color="error" onClick={deletePlayer}>Delete</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default PlayerList;
