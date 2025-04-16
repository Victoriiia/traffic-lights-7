import Light from "./Light";

const Horizontal = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "50px" }}>
      <Light color="red" />
      <Light color="yellow" />
      <Light color="green" />
    </div>
  );
};

export default Horizontal;
