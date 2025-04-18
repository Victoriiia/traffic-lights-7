import React, { useEffect, useState } from "react";

const PedestrianTrafficLight = ({ auto, isCarGreen }) => {
  const [isWalk, setIsWalk] = useState(false); // false = "Чекай", true = "Йди"
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (!auto || isCarGreen) return;

    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 10));
      if (timer === 0) {
        setIsWalk((prev) => !prev);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [auto, isCarGreen, timer]);

  const handleClick = () => {
    if (!isCarGreen) {
      setIsWalk((prev) => !prev);
      setTimer(10); // обнулити таймер після ручного натискання
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          backgroundColor: isWalk ? "green" : "red",
          margin: "0 auto",
          boxShadow: "0 0 10px #000",
        }}
      ></div>
      <p style={{ color: isWalk ? "green" : "red", fontWeight: "bold" }}>
        {isWalk ? `Йди (${timer} сек)` : `Чекай (${timer} сек)`}
      </p>
      <button
        onClick={handleClick}
        disabled={isCarGreen}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          cursor: isCarGreen ? "not-allowed" : "pointer",
        }}
      >
        Змінити стан
      </button>
    </div>
  );
};

export default PedestrianTrafficLight;

