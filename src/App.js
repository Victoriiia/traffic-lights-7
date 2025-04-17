import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Horizontal from "./Horizontal";
import Vertical from "./Vertical";
import { TrafficLightsProvider } from "./context/TrafficLightsContext";
import StatsBar from "./StatsBar";

function App() {
  return (
    <TrafficLightsProvider>
      <Router>
        <Navbar />
        <StatsBar />
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















