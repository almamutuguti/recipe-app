const form = document.querySelector("form");

let recipes = [];

//employing client side form validation to avoid invalid inputs ro verify if the recipe already exists
function handleSubmit(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get recipe name, ingredients, and method input values
  const nameInput = document.querySelector('#recipe-name');
  const ingrInput = document.querySelector('#recipe-ingredients');
  const methodInput = document.querySelector('#recipe-method');
  const recipename = nameInput.value.trim();//trim?
  const ingredients = ingrInput.value.trim().split(',').map(i => i.trim());// ??
  const method = methodInput.value.trim();
}

//if the inputs are valid add them to the array of recipies
if (recipename && ingredients.length > 0 && method) {
    const newRecipe = {recipename, ingredients, method};
    recipes.push(newRecipe);
}

// clear the form inputs
nameInput.value = '';
ingrInput.value = '';
methodInput.value = '';

//add event listener after handleSubmit() function to call the code when user submits form
form.addEventListener('submit', handleSubmit);

