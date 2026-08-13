import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Update from "./pages/Update.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/products/:id/edit" element={<Update />} />
    </Routes>
  );
}

export default App;
