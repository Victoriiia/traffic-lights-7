// src/App.jsx
import { useState } from "react";
import Light from "./Light";
import StatsBar from "./StatsBar";
import "./App.css";

function App() {
  const [stats, setStats] = useState({ red: 0, yellow: 0, green: 0 });
  const [layout, setLayout] = useState("vertical");

  const handleClick = (color) => {
    setStats((prev) => ({
      ...prev,
      [color]: prev[color] + 1,
    }));
  };

  const toggleLayout = () => {
    setLayout((prev) => (prev === "vertical" ? "horizontal" : "vertical"));
  };

  return (
    <div className="App">
      <h1>Світлофор</h1>
      <StatsBar stats={stats} onToggle={toggleLayout} />
      <div className={`traffic-container ${layout}`}>
        <Light tlColor="red" onClick={() => handleClick("red")} />
        <Light tlColor="yellow" onClick={() => handleClick("yellow")} />
        <Light tlColor="green" onClick={() => handleClick("green")} />
      </div>
    </div>
  );
}

export default App;

