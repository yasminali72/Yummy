import { UI } from "./ui.js";
import { getDetailsMeal } from "./details.js";
import { closeMenu, widthMenu } from "./main.js";
export async function getIngredients() {
  let api = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  let response = await api.json();

  let ingredients = response.meals;

  UI.removeLoading()

  //  all ingredients
  // ingredients.forEach((ingredient) => {
  //   console.log(ingredient);
  //   UI.removeLoading()
  //   UI.displayIngredients(ingredient);
  // });
  
// 20 ingredients
console.log(ingredients.length);
if(ingredients.length>20){
  for(let i=0;i<20;i++){
    UI.displayIngredients(ingredients[i]);
  }
}
else
{
  ingredients.forEach((ingredient) => {
      console.log(ingredient);
      UI.displayIngredients(ingredient);
    });
}


  $(" .ingredient").click(function () {
    let ingredientName = $(this).attr("id");
    console.log(ingredientName);
    $("#Ingredients .ingredients").empty();
    UI.addLoading()
    filterIngredient(ingredientName);
  });
}

async function filterIngredient(ingredientName) {
  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`
  );
  let response = await api.json();
  let meals = response.meals;
  console.log(meals);
  UI.removeLoading()
  meals.forEach((meal) => {
    
    UI.displayFilteredIngredient(meal);
  });

  $(".meal").click(function () {
    let mealId = $(this).attr("id");
    console.log(mealId);
    $("#Ingredients").hide();
    closeMenu(widthMenu)
    UI.addLoading()
    getDetailsMeal(mealId);
  });
}
