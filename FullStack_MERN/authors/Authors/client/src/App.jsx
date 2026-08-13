import { Navigate, Route, Routes } from "react-router-dom";
import AuthorList from "./pages/AuthorList.jsx";
import NewAuthor from "./pages/NewAuthor.jsx";
import EditAuthor from "./pages/EditAuthor.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/authors" replace />} />
      <Route path="/authors" element={<AuthorList />} />
      <Route path="/authors/new" element={<NewAuthor />} />
      <Route path="/authors/:id/edit" element={<EditAuthor />} />
    </Routes>
  );
}

export default App;
