import { useContext } from "react";
import { TrafficLightsContext } from "./context/TrafficLightsContext";

const StatsBar = () => {
  const { stats } = useContext(TrafficLightsContext);

  return (
    <ul>
      <li>Червоний: {stats.red}</li>
      <li>Жовтий: {stats.yellow}</li>
      <li>Зелений: {stats.green}</li>
    </ul>
  );
};

export default StatsBar;



