import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ onSearch }) => {
  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <Link to="/" className="header-title">
        FlavorNest
      </Link>
      <input
        type="text"
        placeholder="Search recipes..."
        className="header-search"
        onChange={(e) => onSearch(e.target.value)}
        aria-label="Search recipes"
      />
    </motion.header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Header;