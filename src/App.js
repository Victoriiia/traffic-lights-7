import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Horizontal from "./Horizontal";
import Vertical from "./Vertical";
import { TrafficLightsProvider } from "./context/TrafficLightsContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <TrafficLightsProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/horizontal" element={<Horizontal />} />
          <Route path="/vertical" element={<Vertical />} />
        </Routes>
      </Router>
    </TrafficLightsProvider>
  );
}

export default App;
















