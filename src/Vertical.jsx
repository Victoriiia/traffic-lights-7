import { useContext } from "react";
import Light from "./Light";
import { TrafficLightsContext } from "./context/TrafficLightsContext";

const Vertical = () => {
  const { lights, incrementClick } = useContext(TrafficLightsContext);

  return (
    <div className="traffic-container vertical">
      {lights.map(light => (
        <Light
          key={light.id}
          color={light.color}
          onClick={() => incrementClick(light.color)}
        />
      ))}
    </div>
  );
};

export default Vertical;









