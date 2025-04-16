import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ChefCharacter = ({ message }) => {
  return (
    <motion.div
      className="chef-character"
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <img src="/chef.svg" alt="Cartoon chef" className="chef-character-img" />
      <div className="chef-character-bubble">
        <p>{message}</p>
      </div>
    </motion.div>
  );
};

ChefCharacter.propTypes = {
  message: PropTypes.string.isRequired
};

export default ChefCharacter;