import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Container,
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

function PlayerStatus() {
  const { gameNumber } = useParams();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/players`)
      .then((res) => setPlayers(res.data.players))
      .catch((err) => console.log(err));
  }, []);

  const statusField =
    gameNumber === "2"
      ? "gameTwoStatus"
      : gameNumber === "3"
      ? "gameThreeStatus"
      : "gameOneStatus";

  const updateStatus = (player, status) => {
    axios
      .put(`${API_URL}/api/players/${player._id}`, {
        [statusField]: status,
      })
      .then((res) => {
        setPlayers(
          players.map((item) =>
            item._id === player._id ? res.data.player : item
          )
        );
      })
      .catch((err) => console.log(err));
  };

  const buttonVariant = (player, status) =>
    player[statusField] === status ? "contained" : "outlined";

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <NavBar />

      <Typography variant="h4" mb={2}>
        Player Status - Game {gameNumber}
      </Typography>

      <Box display="flex" gap={1} mb={3}>
        <Button component={Link} to="/status/game/1" variant={gameNumber === "1" ? "contained" : "outlined"}>
          Game 1
        </Button>
        <Button component={Link} to="/status/game/2" variant={gameNumber === "2" ? "contained" : "outlined"}>
          Game 2
        </Button>
        <Button component={Link} to="/status/game/3" variant={gameNumber === "3" ? "contained" : "outlined"}>
          Game 3
        </Button>
      </Box>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Player Name</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player) => (
              <TableRow key={player._id}>
                <TableCell>{player.name}</TableCell>
                <TableCell>
                  <Box display="flex" gap={1} flexWrap="wrap">
                    <Button
                      color="success"
                      variant={buttonVariant(player, "Playing")}
                      onClick={() => updateStatus(player, "Playing")}
                    >
                      Playing
                    </Button>
                    <Button
                      color="error"
                      variant={buttonVariant(player, "Not Playing")}
                      onClick={() => updateStatus(player, "Not Playing")}
                    >
                      Not Playing
                    </Button>
                    <Button
                      color="inherit"
                      variant={buttonVariant(player, "Undecided")}
                      onClick={() => updateStatus(player, "Undecided")}
                    >
                      Undecided
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default PlayerStatus;
