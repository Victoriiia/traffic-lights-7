import Light from "./Light";

const Vertical = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "50px" }}>
      <Light color="red" />
      <Light color="yellow" />
      <Light color="green" />
    </div>
  );
};

export default Vertical;

