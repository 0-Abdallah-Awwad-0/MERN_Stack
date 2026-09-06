import { Routes, Route } from "react-router-dom";
import Main from "./views/Main.jsx";
import NewCar from "./views/NewCar.jsx";
import Details from "./views/Details.jsx";
import EditCar from "./views/EditCar.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cars/new" element={<NewCar />} />
      <Route path="/cars/:id" element={<Details />} />
      <Route path="/cars/:id/edit" element={<EditCar />} />
    </Routes>
  );
}

export default App;
