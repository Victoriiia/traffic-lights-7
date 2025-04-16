import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", background: "#111", padding: "10px" }}>
      <Link to="/" style={{ color: "white" }}>Головна</Link>
      <Link to="/horizontal" style={{ color: "white" }}>Горизонтальний світлофор</Link>
      <Link to="/vertical" style={{ color: "white" }}>Вертикальний світлофор</Link>
    </nav>
  );
};

export default Navbar;


