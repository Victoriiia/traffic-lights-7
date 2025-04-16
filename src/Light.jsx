import { motion } from "framer-motion";

const Light = ({ color, onClick }) => {
  return (
    <motion.div
      className="light"
      style={{ backgroundColor: color }}
      whileTap={{ scale: 1.2, opacity: 0.6 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    />
  );
};

export default Light;










  
