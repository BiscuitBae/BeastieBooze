const ingredientParser = (drink) => {
  const ingredients = [];

  /* Probably a more efficient way to do this, but this helper
  will parse through the drink object and return it's ingredients
  and respective measurements in a less ridiculous format
  */
 
  for (let prop in drink) {
    
    if (prop.includes("strIngredient") && drink[prop]) {
      ingredients.push([drink[prop]]);
    }
  }

  for (let i = 1; i <= ingredients.length; i++) {
    const measure = `strMeasure${i}`;
    ingredients[i - 1].push(drink[measure]);
  }
 
  return ingredients;
}

export default ingredientParser;