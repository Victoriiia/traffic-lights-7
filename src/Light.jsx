import { motion } from "framer-motion";
import "./App.css"; // <-- обов'язково

const Light = ({ color, onClick }) => {
  return (
    <motion.div
      className="light"
      style={{ backgroundColor: color }}
      whileTap={{ scale: 1.2 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    />
  );
};

export default Light;














  
