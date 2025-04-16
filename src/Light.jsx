// src/Light.jsx
import PropTypes from "prop-types";

const Light = ({ tlColor, onClick }) => {
  return (
    <div
      className={`light ${tlColor}`}
      onClick={onClick}
    />
  );
};

Light.propTypes = {
  tlColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Light;
