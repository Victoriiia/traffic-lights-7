import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TrafficLightsProvider } from "./context/TrafficLightsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TrafficLightsProvider>
    <App />
  </TrafficLightsProvider>
);
