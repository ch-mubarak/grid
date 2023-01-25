import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Grid from "./pages/grid/Grid";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grid" element={<Grid />} />
      </Routes>
    </div>
  );
}

export default App;
