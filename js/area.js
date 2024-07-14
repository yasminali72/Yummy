import { UI } from "./ui.js";
import { getDetailsMeal } from "./details.js";
import { closeMenu,widthMenu } from "./main.js";

export async function getArea() {
  let api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a`);
  let response = await api.json();

  let Areas = response.meals;
  console.log(Areas);
  
UI.addLoading()
  dataArea(Areas);
}

function dataArea(Areas) {
  UI.removeLoading()
  Areas.forEach((Area) => {
   
    UI.displayArea(Area);
  });

  $(".area").click(function () {
    let areaName = $(this).attr("id");
    console.log(areaName);
    $("#areas .areas").empty();
    UI.addLoading()
    getAreaByName(areaName);
  });
}

export async function getAreaByName(areaName) {
  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`
  );
  let response = await api.json();

  let meals = response.meals;

  UI.removeLoading()
  meals.forEach((meal) => {

    UI.displayMealsArea(meal);
  });

  $(".meal").click(function () {
    let mealId = $(this).attr("id");
    console.log(mealId);
    closeMenu(widthMenu)
    UI.addLoading()
    getDetailsMeal(mealId);
  });
}
