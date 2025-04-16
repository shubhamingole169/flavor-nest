import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RecipeDetail from "../components/RecipeDetail";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const foundRecipe = recipes.find((r) => r.id === id);
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return <RecipeDetail recipe={recipe} />;
};

export default Recipe;