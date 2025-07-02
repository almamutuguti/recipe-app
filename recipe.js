// get id from url
const params = new URLSearchParams(location,search);
const recipeId = urlParams.get('id');


const container = document.getElementById("recipe-details");

//fetch
const recipes = JSON.parse(localStorage.getItem("recipeBook_recipes")) || [];
const recipe = recipes.find(r => r.id === recipeId);

if (recipe) {
    container.innerHTML = `
    <h1>${recipe.title}</h1>
    <Img src="${recipe.image}" alt="${recipe.title}" style="max-width: 100%; height: auto;"/>
    <p><strong>Description:</strong> ${recipe.description}</p>
    <p><strong>Servings:</strong> ${recipe.servings}</p>
    <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
    <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>

    <h3>Instructions</h3>

    <ol>
        ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
    </ol>

    <p><a href="edit-recipe.html?id=${recipe.id}">Edit this recipe</a></p>
    <p><a href="index.html">Back to homepage</a></p>`;
    
} else {
    container.innerHTML = `<p>Sorry, recipe not found</p>`
}