import { UI } from "./ui.js";
import { dataMeal } from "./meals.js";


export async function getMealsByName(name) {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    let response = await api.json();
    console.log(api);
    console.log(response);
  let meals =response.meals
UI.addLoading()
  dataMeal(meals)
}




export async function getMealsByLetter(Letter) {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${Letter}`
    );
    let response = await api.json();
    console.log(api);
    console.log(response);
  let meals =response.meals
UI.addLoading()
  dataMeal(meals)
}