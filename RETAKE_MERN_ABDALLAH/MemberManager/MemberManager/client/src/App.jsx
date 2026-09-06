import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";
import NewMember from "./pages/NewMember.jsx";
import EditMember from "./pages/EditMember.jsx";
import Details from "./pages/Details.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/newmember" element={<NewMember />} />
      <Route path="/editmember/:id" element={<EditMember />} />
      <Route path="/member/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
