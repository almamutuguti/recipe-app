//handling the data

// This function will now be async because we are using fetch()
async function getRecipes() {
  // 1. Try to get the recipes string from local storage
  const recipesJSON = localStorage.getItem('recipeBook_recipes');

  // 2. Check if data exists in local storage
  if (recipesJSON) {
    // If it exists, parse it and return it. The file is not needed.
    return JSON.parse(recipesJSON);
  } else {
    // 3. If no data is in local storage, fetch it from the JSON file.
    try {
      const response = await fetch('recipes.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const fileRecipes = await response.json();

      // 4. Save the data from the file into local storage for next time.
      localStorage.setItem('recipeBook_recipes', JSON.stringify(fileRecipes));

      // 5. Return the data from the file so the app can use it.
      return fileRecipes;
    } catch (error) {
      console.error("Could not fetch the recipes.json file:", error);
      // Return an empty array if the file can't be loaded.
      return [];
    }
  }
}