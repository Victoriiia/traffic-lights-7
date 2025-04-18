import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#333" }}>🚦 Вітаємо у тренажері світлофора!</h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>
        Тут ви можете взаємодіяти з горизонтальним та вертикальним світлофорами,
        відстежувати кліки та спостерігати за пішохідним переходом.
      </p>

      <div style={{ marginTop: "40px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link to="/horizontal">
          <button style={buttonStyle}>Горизонтальний світлофор</button>
        </Link>
        <Link to="/vertical">
          <button style={buttonStyle}>Вертикальний світлофор</button>
        </Link>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "15px 25px",
  fontSize: "1rem",
  backgroundColor: "#0066cc",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

export default Home;


  
  