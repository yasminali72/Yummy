import { UI } from "./ui.js";
import { getDetailsMeal } from "./details.js";
import {closeMenu, widthMenu  } from './main.js'
export async function getMeals() {
  let api = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  let response = await api.json();
  let meals=response.meals
  
UI.addLoading()
  dataMeal(meals);
}

export function dataMeal(meals) {
  $("#meals").empty();
  UI.removeLoading()

  // all meals
  meals.forEach((meal) => {
    // console.log(meal);
    UI.displayMeals(meal);
  });


  $(".meal").click(function () {
    let id = $(this).attr("id");
    console.log(id);
    UI.addLoading()
closeMenu(widthMenu)
    getDetailsMeal(id);
  });
}

//categories
export async function getDetailsCategory(categoryName) {
  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );
  let response = await api.json();
  console.log(api);
  console.log(response.meals);
  let meals=response.meals
  UI.addLoading()
  category(meals);
}

function category(meals) {
  UI.removeLoading()
  // all meals
  // meals.forEach((meal) => {
  //   UI.displayDetailsCategory(meal);
  // });
  // 20 meal only
  if(meals.length>20){
    for(let i=0;i<20;i++){
      UI.displayDetailsCategory(meals[i]);
    }
  }
  else{
    meals.forEach((meal) => {
        UI.displayDetailsCategory(meal);
      });
  }
 

  $(".meal").click(function () {
    let id = $(this).attr("id");
    closeMenu(widthMenu)
UI.addLoading()
    getDetailsMeal(id);
  });
}
