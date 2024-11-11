import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <Routes >
      <Route path="/" element={<Login />} ></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
    
  );
}

export default App;
