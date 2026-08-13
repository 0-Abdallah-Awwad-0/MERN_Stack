import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Box display="flex" gap={2} mb={3}>
      <Button component={Link} to="/players/list">
        Manage Players
      </Button>
      <Button component={Link} to="/status/game/1">
        Manage Player Status
      </Button>
    </Box>
  );
}

export default NavBar;
