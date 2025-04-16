import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <motion.div
      className="recipe-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      role="gridcell"
    >
      <Link to={`/recipe/${recipe.id}`} className="recipe-card-link">
        <img src={recipe.image} alt={recipe.title} className="recipe-card-img" loading="lazy" />
        <h3 className="recipe-card-title">{recipe.title}</h3>
        <p className="recipe-card-prep">{recipe.prepTime}</p>
        <motion.img
          src="/cupcake.svg"
          alt="Cupcake character"
          className="recipe-card-character"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    prepTime: PropTypes.string.isRequired
  }).isRequired
};

export default RecipeCard;