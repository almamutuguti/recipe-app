async function displayRecipes() {
  const container = document.getElementById("recipe-list");
  const recipes = await getRecipes();

  if (recipes.length === 0) {
    container.innerHTML = "<p>No recipes found</p>";
    return;
  }

  recipes.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.title}"/>
    <h3>${recipe.title}</h3>
    <p>${recipe.description}</p>
    <a href="recipe.html?id=${recipe.id}">View Recipe</a>`;

    container.appendChild(card);
  });
}

displayRecipes();



