document.getElementById("add-recipe-form").addEventListener("submit", function(e) {
   e.preventDefault();

   const newRecipe = {
    id: Date.now(),
    title: document.getElementById("title").value.trim(),
    image: document.getElementById("image").value.trim(),
    description: document.getElementById("description").value.trim(),
    servings: document.getElementById("servings").value.trim(),
    prepTime: document.getElementById("prepTime").value.trim(),
    cookTime: document.getElementById("cookTime").value.trim(),
    ingredients: document.getElementById("ingredients").value.trim().split("/n"),
    instructions: document.getElementById("instructions").value.trim().split("/n"),
   };

   const recipes = JSON.parse(localStorage.getItem("recipeBook_recipes")) || [];
   recipes.push(newRecipe);
   localStorage.setItem("recipeBook_recipes", JSON.stringify(recipes));


   const message = document.getElementById("success-message");
   message.style.display = "block"

   document.getElementById("add-recipe-form").reset();
})