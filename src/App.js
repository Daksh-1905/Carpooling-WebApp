import React, { useState } from "react";
import Navbar from "./components/Navbar";
import IMAGE from "./bground_image.png";
import "./App.css";
import HomePage from "./components/HomePage";


const App = () => {
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
      <Navbar
        mode={mode}
        toggleMode={toggleMode}
      />
      <HomePage mode={mode} />
    </>
  );
};

export default App;
