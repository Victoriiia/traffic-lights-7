const Light = ({ color }) => {
    const backgroundColors = {
      red: "red",
      yellow: "yellow",
      green: "green",
    };
  
    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: backgroundColors[color],
        }}
      ></div>
    );
  };
  
  export default Light;
  
