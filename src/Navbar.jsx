import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#111", color: "white" }}>
      <Link to="/" style={{ color: "white" }}>Головна</Link>
      <Link to="/horizontal" style={{ color: "white" }}>Горизонтальний світлофор</Link>
      <Link to="/vertical" style={{ color: "white" }}>Вертикальний світлофор</Link>
    </nav>
  );
};

export default Navbar;

