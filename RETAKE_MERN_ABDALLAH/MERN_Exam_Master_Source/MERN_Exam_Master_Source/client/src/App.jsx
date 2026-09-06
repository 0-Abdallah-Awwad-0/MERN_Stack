import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";
import NewAppointment from "./pages/NewAppointment.jsx";
import EditAppointment from "./pages/EditAppointment.jsx";
import Details from "./pages/Details.jsx";
import Schedule from "./pages/Schedule.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/new" element={<NewAppointment />} />
      <Route path="/appointments/:id" element={<Details />} />
      <Route path="/appointments/:id/edit" element={<EditAppointment />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  );
}

export default App;
