// get id from url
const urlParams = new URLSearchParams(location.search);
const recipeId = Number(urlParams.get("id"));

const form = document.getElementById("edit-recipe-form");
const message = document.getElementById("update-message");

const titleField = document.getElementById("title");
const imageField = document.getElementById("image");
const descField = document.getElementById("description");
const servingsField = document.getElementById("servings");
const prepField = document.getElementById("prepTime");
const cookField = document.getElementById("cookTime");
const ingredientsField = document.getElementById("ingredients");
const instructionsField = document.getElementById("instructions");

//form
const recipes = JSON.parse(localStorage.getItem("recipeBook_recipes")) || [];
const recipe =  recipes.find(r => r.id === recipeId);

if (recipe) {
    titleField.value = recipe.title;
    imageField.value = recipe.image;
    descField.value = recipe.description;
    servingsField.value = recipe.servings;
    prepField.value = recipe.prepTime;
    cookField.value = recipe.cookTime;
    ingredientsField.value = recipe.ingredients.join("/n");
    instructionsField.value = recipe.instructions.join("/n");

}

form.addEventListener("submit", e => {
    e.preventDefault();

    //update recipe fields
    recipe.title = titleField.value.trim();
    recipe.image = imageField.value.trim();
    recipe.description = descField.value.trim();
    recipe.servings = servingsField.value.trim();
    recipe.prepTime = prepField.value.trim();
    recipe.cookTime = cookField.value.trim();
    recipe.ingredients = ingredientsField.value.trim().split("/n");
    recipe.instructions = instructionsField.value.trim().split("/n");

    //save
    const updatedRecipes = recipes.map(r => (r.id === recipeId ? recipe : r));
    localStorage.setItem("recipeBook_recipes", JSON.stringify(updatedRecipes));

    form.style.display = "none";
    message.style.display = "block";

})