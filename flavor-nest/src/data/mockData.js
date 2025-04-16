const initialRecipes = [
  {
    id: "1",
    title: "Magic Cupcake Blast",
    category: "Dessert",
    prepTime: "30 min",
    image: "/cupcake.jpg", // Uses public/cupcake.jpg
    ingredients: ["Flour", "Sugar", "Rainbow Sprinkles", "Butter", "Eggs"],
    instructions: [
      "Mix flour and sugar in a bowl.",
      "Add butter and eggs, stir well.",
      "Fold in rainbow sprinkles.",
      "Bake at 350°F for 20 minutes."
    ]
  },
  {
    id: "2",
    title: "Zesty Veggie Stir-Fry",
    category: "Main Course",
    prepTime: "25 min",
    image: "/carrot.jpg", // Uses public/carrot.jpg (represents veggies)
    ingredients: ["Bell Peppers", "Broccoli", "Soy Sauce", "Ginger", "Rice"],
    instructions: [
      "Chop veggies into bite-sized pieces.",
      "Heat oil in a pan, add ginger.",
      "Stir-fry veggies until tender.",
      "Add soy sauce, serve over rice."
    ]
  },
  {
    id: "3",
    title: "Fluffy Pancake Stack",
    category: "Breakfast",
    prepTime: "15 min",
    image: "/pancake.jpg", // Needs public/pancake.jpg (download below)
    ingredients: ["Flour", "Milk", "Eggs", "Maple Syrup", "Butter"],
    instructions: [
      "Mix flour, milk, and eggs into a batter.",
      "Heat a pan and add butter.",
      "Pour batter to form pancakes.",
      "Cook until golden, serve with syrup."
    ]
  },
  {
    id: "4",
    title: "Dreamy Chocolate Mousse",
    category: "Dessert",
    prepTime: "20 min",
    image: "/chef.jpg", // Uses public/chef.jpg (as a fun placeholder)
    ingredients: ["Chocolate", "Cream", "Sugar", "Vanilla"],
    instructions: [
      "Melt chocolate in a bowl.",
      "Whip cream with sugar and vanilla.",
      "Fold cream into chocolate.",
      "Chill for 2 hours before serving."
    ]
  }
];

const categories = ["Dessert", "Main Course", "Breakfast"];

const initializeData = () => {
  if (!localStorage.getItem("recipes")) {
    localStorage.setItem("recipes", JSON.stringify(initialRecipes));
  }
};

export { initialRecipes, categories, initializeData };