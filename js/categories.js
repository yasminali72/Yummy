import { UI } from "./ui.js";
import { getDetailsCategory } from "./meals.js";

export async function getCategories() {
  let api = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  let response = await api.json();

  UI.addLoading()
  console.log(response.categories);
  dataCategory(response.categories);
}

function dataCategory(categories) {
  UI.removeLoading()
  categories.forEach((category) => {
    
    UI.displayCategory(category);
    console.log(category);
  });

  $(".meal ").click(function () {
    let categoryName = $(this).attr("id");
    console.log(categoryName);
    $("#Categories .meals").empty();
    
UI.addLoading()
    getDetailsCategory(categoryName);
  });
}
