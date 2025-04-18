import React, { useEffect, useState } from "react";
import Light from "./components/Light";
import StatsBar from "./components/StatsBar";
import PedestrianTrafficLight from "./components/PedestrianTrafficLight";
import { useTrafficLights } from "./context/TrafficLightsContext";

const Vertical = () => {
  const { verticalLights, incrementClick } = useTrafficLights();
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
        setSecondsLeft((prev) => prev - 1);
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
        gap: "30px",
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
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {verticalLights.map((light) => (
          <Light
            key={light.id}
            color={light.color}
            active={light.color === activeLight}
            onClick={() => incrementClick("vertical", light.color)}
          />
        ))}
      </div>

      <button
        onClick={() =>
          setActiveLight((prev) =>
            prev === "red" ? "green" : prev === "green" ? "yellow" : "red"
          )
        }
      >
        Змінити стан
      </button>

      <StatsBar />
      <PedestrianTrafficLight auto={true} isCarGreen={activeLight === "green"} />
    </div>
  );
};

export default Vertical;







