import "./App.css";
import PickUp from "./pages/publishRide/Pick.js";
import DropOff from "./pages/publishRide/Drop.js";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login.js";
import axios from "axios";
import Homepage from "./pages/Homepage.js";
import React, { useState } from "react";
import Layout from "./Components/Layout/Layout";

axios.defaults.withCredentials = true;

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/homepage" element={<Homepage mode={mode} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/drop" element={<DropOff />} />
          <Route path="/pick" element={<PickUp/>} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
