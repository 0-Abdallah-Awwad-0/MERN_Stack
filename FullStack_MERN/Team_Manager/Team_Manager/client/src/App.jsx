import { Navigate, Route, Routes } from "react-router-dom";
import PlayerList from "./pages/PlayerList.jsx";
import AddPlayer from "./pages/AddPlayer.jsx";
import PlayerStatus from "./pages/PlayerStatus.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/players/list" replace />} />
      <Route path="/players/list" element={<PlayerList />} />
      <Route path="/players/addplayer" element={<AddPlayer />} />
      <Route path="/status/game/:gameNumber" element={<PlayerStatus />} />
    </Routes>
  );
}

export default App;
