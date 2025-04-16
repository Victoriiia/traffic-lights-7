import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Horizontal from "./Horizontal";
import Vertical from "./Vertical";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/horizontal" element={<Horizontal />} />
        <Route path="/vertical" element={<Vertical />} />
      </Routes>
    </Router>
  );
}

export default App;













