import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TrafficLightsContext = createContext();

export const TrafficLightsProvider = ({ children }) => {
  const [lights, setLights] = useState([]);
  const [stats, setStats] = useState({ red: 0, yellow: 0, green: 0 });

  useEffect(() => {
    axios.get("http://localhost:3001/trafficLights")
      .then((res) => {
        setLights(res.data);
        const counts = {
          red: res.data.find(l => l.color === "red")?.clicks || 0,
          yellow: res.data.find(l => l.color === "yellow")?.clicks || 0,
          green: res.data.find(l => l.color === "green")?.clicks || 0,
        };
        setStats(counts);
      });
  }, []);

  const incrementClick = (color) => {
    const updated = lights.map(light =>
      light.color === color ? { ...light, clicks: light.clicks + 1 } : light
    );
    setLights(updated);
    setStats(prev => ({ ...prev, [color]: prev[color] + 1 }));

    const clickedLight = updated.find(l => l.color === color);
    axios.put(`http://localhost:3001/trafficLights/${clickedLight.id}`, clickedLight);
  };

  return (
    <TrafficLightsContext.Provider value={{ lights, incrementClick, stats }}>
      {children}
    </TrafficLightsContext.Provider>
  );
};





