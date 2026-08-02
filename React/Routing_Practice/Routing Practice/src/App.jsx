
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Home from "./components/Home";
import Number from "./components/Number";
import Word from "./components/Word";
import StyledWord from "./components/StyledWord";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/number/:num" element={<Number />} />
      <Route path="/word/:word" element={<Word />} />
      <Route path="/:word/:textColor/:background" element={<StyledWord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
