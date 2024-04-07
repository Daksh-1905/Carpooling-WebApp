import React, { useState } from "react";
import Navbar from "./components/Navbar";
import IMAGE from "./bground_image.png";
import "./App.css";
import TravelInfo from "./components/TravelInfo";
import MiddleFeatures from "./components/MiddleFeatures";


const App = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
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
      <div className="image-height">
        <img src={IMAGE} alt="..." />
      </div>
      <TravelInfo />
      <MiddleFeatures mode={mode} />
    </>
  );
};

export default App;
