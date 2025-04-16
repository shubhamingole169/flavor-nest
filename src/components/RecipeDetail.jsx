import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import CookingMode from "./CookingMode";

const RecipeDetail = ({ recipe }) => {
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [isCookingMode, setIsCookingMode] = useState(false);

  const handleIngredientCheck = (ingredient) => {
    setCheckedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleSave = () => {
    toast.success("Recipe saved!", {
      icon: "🍽️",
      style: { background: "#ffd740", color: "#333" }
    });
  };

  return (
    <motion.div
      className={`recipe-detail ${isCookingMode ? "cooking-mode" : ""}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Toaster />
      <div className="recipe-detail-content">
        <img src={recipe.image} alt={recipe.title} className="recipe-detail-img" />
        <div className="recipe-detail-info">
          <h2 className="recipe-detail-title">{recipe.title}</h2>
          <p className="recipe-detail-prep">Prep Time: {recipe.prepTime}</p>
          <h3>Ingredients</h3>
          <ul className="recipe-detail-ingredients">
            {recipe.ingredients.map((ingredient, index) => (
              <motion.li
                key={index}
                className="ingredient-item"
                animate={{ scale: checkedIngredients.includes(ingredient) ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="checkbox"
                  id={`ingredient-${index}`}
                  checked={checkedIngredients.includes(ingredient)}
                  onChange={() => handleIngredientCheck(ingredient)}
                  aria-label={`Check ${ingredient}`}
                />
                <label htmlFor={`ingredient-${index}`}>{ingredient}</label>
              </motion.li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <ol className="recipe-detail-instructions">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <button className="recipe-detail-save" onClick={handleSave}>
            Save Recipe
          </button>
          <button
            className="recipe-detail-cooking-mode"
            onClick={() => setIsCookingMode(!isCookingMode)}
            aria-label={isCookingMode ? "Exit Cooking Mode" : "Enter Cooking Mode"}
          >
            {isCookingMode ? "Exit Cooking Mode" : "Cooking Mode"}
          </button>
        </div>
      </div>
      {isCookingMode && <CookingMode instructions={recipe.instructions} />}
    </motion.div>
  );
};

RecipeDetail.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    prepTime: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default RecipeDetail;