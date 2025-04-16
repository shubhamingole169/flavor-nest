import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import { initializeData } from "../data/mockData";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    initializeData();
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);
    setFilteredRecipes(storedRecipes);
  }, []);

  const handleSearch = (term) => {
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  const handleFilter = (category) => {
    const filtered = category
      ? recipes.filter((recipe) => recipe.category === category)
      : recipes;
    setFilteredRecipes(filtered);
  };

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
      <div className="recipe-grid" role="grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p className="no-results">No recipes found!</p>
        )}
      </div>
    </motion.div>
  );
};

export default Home;