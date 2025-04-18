import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // 🔥 Обов’язково цей рядок

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Головна</Link>
      <Link to="/horizontal">Горизонтальний світлофор</Link>
      <Link to="/vertical">Вертикальний світлофор</Link>
    </nav>
  );
};

export default Navbar;







