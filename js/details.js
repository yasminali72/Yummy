import { UI } from "./ui.js";

export async function getDetailsMeal(id) {
  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  let response = await api.json();
  console.log(api);
  console.log(response.meals[0]);
  let meal = response.meals[0];
UI.removeLoading()
  UI.displayDetails(meal);
}
