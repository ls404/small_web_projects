const API_KEY = "YOUR_API_KEY";

function displayRecipes(recipes) {
  const recipeList = document.querySelector(".recipe-list");
  recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    const item = document.createElement("li");
    item.classList.add("recipe-item");
    item.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" />
        <h2>${recipe.title}</h2>
        <p><strong>Ingredients:</strong> ${recipe.extendedIngredients
          .map((ingredient) => ingredient.original)
          .join(", ")}</p>
        <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
        `;

    recipeList.appendChild(item);
    console.log(item);
  });
}

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=3`
  );

  const data = await response.json();

  return data.recipes;
}
async function init() {
  const recipes = await getRecipes();
  console.log(recipes);
  displayRecipes(recipes);
}

init();
