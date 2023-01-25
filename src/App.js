import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Grid from "./pages/grid/Grid";
import { useState } from "react";

function App() {
  const [api, setApi] = useState("users");
  const navigate = useNavigate();

  const onSubmit = (api) => {
    setApi(api);
    return navigate("/grid")
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home onSubmit={onSubmit} />} />
        <Route path="/grid" element={<Grid api={api} />} />
      </Routes>
    </div>
  );
}

export default App;
