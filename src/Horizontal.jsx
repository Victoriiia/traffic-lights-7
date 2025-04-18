import React, { useEffect, useState } from "react";
import Light from "./components/Light";
import StatsBar from "./components/StatsBar";
import PedestrianTrafficLight from "./components/PedestrianTrafficLight";
import { useTrafficLights } from "./context/TrafficLightsContext";

const Horizontal = () => {
  const { horizontalLights, incrementClick } = useTrafficLights();
  const [activeLight, setActiveLight] = useState("red");
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((prev) =>
        prev === "red" ? "green" : prev === "green" ? "yellow" : "red"
      );
      setSecondsLeft(10);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (secondsLeft > 0) {
        setSecondsLeft(secondsLeft - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        marginTop: "50px",
      }}
    >
      <h3 style={{ color: activeLight === "red" ? "red" : "green" }}>
        {activeLight === "red"
          ? `Чекай (${secondsLeft} сек)`
          : `Йди (${secondsLeft} сек)`}
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        {horizontalLights.map((light) => (
          <Light
            key={light.id}
            color={light.color}
            onClick={() => incrementClick("horizontal", light.color)}
            active={light.color === activeLight}
          />
        ))}
      </div>

      <StatsBar />
      <PedestrianTrafficLight auto={true} isCarGreen={activeLight === "green"} />
    </div>
  );
};

export default Horizontal;











