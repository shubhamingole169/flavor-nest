import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ChefCharacter from "./ChefCharacter";
import PropTypes from "prop-types";

const CookingMode = ({ instructions }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % instructions.length);
  };

  return (
    <motion.div
      className="cooking-mode-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="cooking-mode-content">
        <ChefCharacter message={instructions[currentStep]} />
        <button className="cooking-mode-next" onClick={nextStep}>
          Next Step
        </button>
      </div>
    </motion.div>
  );
};

CookingMode.propTypes = {
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CookingMode;