import React, { createContext, useContext, useState } from "react";

const TrafficLightsContext = createContext();

export const TrafficLightsProvider = ({ children }) => {
  const [activeLight, setActiveLight] = useState("red");
  const [clicks, setClicks] = useState({
    horizontal: { red: 0, yellow: 0, green: 0 },
    vertical: { red: 0, yellow: 0, green: 0 },
  });

  const lights = [
    { id: 1, color: "red" },
    { id: 2, color: "yellow" },
    { id: 3, color: "green" },
  ];

  const incrementClick = (direction, color) => {
    setClicks((prev) => ({
      ...prev,
      [direction]: {
        ...prev[direction],
        [color]: prev[direction][color] + 1,
      },
    }));
  };

  return (
    <TrafficLightsContext.Provider
      value={{
        horizontalLights: lights,
        verticalLights: lights,
        activeLight,
        setActiveLight,
        clicks,
        incrementClick,
      }}
    >
      {children}
    </TrafficLightsContext.Provider>
  );
};

export const useTrafficLights = () => useContext(TrafficLightsContext);









