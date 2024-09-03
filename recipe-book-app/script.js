const recipeList = document.getElementById("recipe-list");

const API_KEY = "275d58779ccf4e22af03e792e8819fff";

function displayRecipes(recipes) {
  recipeList.innerHTML = recipes.map(recipe => `
    <li class="recipe-item">
      <img src="${recipe.image}" alt="recipe image">
      <h2>${recipe.title}</h2>
      <p><strong>Ingredients:</strong> ${recipe.extendedIngredients.map(ing => ing.original).join(", ")}</p>
      <a href="${recipe.sourceUrl}">View Recipe</a>
    </li>
  `).join('');
}

async function getRecipes() {
  const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
  const data = await response.json();
  const recipes = data.recipes;
  displayRecipes(recipes);
}

getRecipes()