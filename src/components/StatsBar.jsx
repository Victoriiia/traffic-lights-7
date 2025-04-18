import React from "react";
import { useTrafficLights } from "../context/TrafficLightsContext";

const StatsBar = () => {
  const { clicks } = useTrafficLights();

  if (!clicks) {
    return <div>Loading statistics...</div>;
  }

  return (
    <div
      style={{
        marginTop: "40px",
        padding: "20px",
        backgroundColor: "#f2f2f2",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
        🔴 {clicks.red ?? 0}
      </div>
      <div style={{ color: "orange", fontWeight: "bold", fontSize: "20px" }}>
        🟡 {clicks.yellow ?? 0}
      </div>
      <div style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}>
        🟢 {clicks.green ?? 0}
      </div>
    </div>
  );
};

export default StatsBar;
