import { UI } from "./ui.js";
import { getDetailsMeal } from "./details.js";
import {closeMenu, widthMenu  } from './main.js'
export async function getMeals() {
  let api = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  let response = await api.json();
  console.log(api);
  console.log(response);
UI.addLoading()
  dataMeal(response.meals);
}

export function dataMeal(meals) {
  $("#meals").empty();
  UI.removeLoading()
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

  UI.addLoading()
  category(response.meals);
}

function category(meals) {
  UI.removeLoading()
  meals.forEach((meal) => {
    UI.displayDetailsCategory(meal);
  });

  $(".meal").click(function () {
    let id = $(this).attr("id");
    closeMenu(widthMenu)
UI.addLoading()
    getDetailsMeal(id);
  });
}
