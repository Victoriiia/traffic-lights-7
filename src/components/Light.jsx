import React from "react";

const Light = ({ color, onClick }) => (
  <div
    style={{
      backgroundColor: color,
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      cursor: "pointer",
      boxShadow: "0 0 10px #000",
    }}
    onClick={onClick}
  ></div>
);

export default Light;
