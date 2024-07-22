import { clearSections } from "./main.js";



export class UI {


static displaySearch(){
  $('#Search').html(` <div class="container w-75 pt-4 p-lg-4 ">
  <div class="row mb-5  g-3 " id="search">
      <div class="col-md-6 ">
          <input type="text" class="form-control-plaintext  border rounded p-2 text-white  "  placeholder="Search By Name" aria-label="Search By Name" id='mealName'>
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control-plaintext border rounded p-2 text-white  " placeholder="Search By First Letter" aria-label="Search By First Letter" id='mealLetter' maxlength="1">
        </div>
  
  
  </div> 
      </div> `)
}


  static displayMeals(meal) {
    $("#Meals #meals").append(` <div class="col-md-3">
  <div class="meal rounded-3 position-relative overflow-hidden" id='${meal.idMeal}' role='button'>
      <img src='${meal.strMealThumb}' alt="" class="w-100 ">
<div class="layer position-absolute top-0 start-0 end-0 bottom-0  rounded-3  d-flex align-items-center">
<h3>${meal.strMeal}</h3>
</div>
  </div>
</div>`);
  }

  static displayDetails(details) {
    clearSections()
    $("#details").removeClass("d-none").addClass("d-block");
 
    let tags = details.strTags?.split(",");
    if (!tags) {
      tags = [];
    }
    let tagsStr = "";
    for (let i = 0; i < tags.length; i++) {
      tagsStr += `
    <span class="tag m-1 p-1 rounded-1 fs-6  fw-normal">${tags[i]}</span>`;
    }

    let Ingredients = ``;
    for (let i = 0; i <= 20; i++) {
      if (details[`strIngredient${i}`]) {
        Ingredients += `<span class="Ingredient  me-2 mt-2 rounded-1 p-2"> ${
          details[`strIngredient${i}`]
        }${details[`strIngredient${i}`]}</span>`;
      }
    }
    console.log(Ingredients);

    $("#details").html(`<div class="container-fluid p-lg-5 pt-5 pb-5">
<div class="row">
    <div class="col-md-4">
        <img src="${details.strMealThumb}" alt="" class='w-100 rounded-3'>
        <h3>${details.strMeal}</h3>
    </div>
    <div class="col-md-8">
        <h1>Instructions</h1>
        <p>${details.strInstructions}</p>
        <h1>Area : ${details.strArea}</h1>
        <h1>Category : ${details.strCategory}</h1>
        <h1>Recipes :</h1>
        <div class='d-flex flex-wrap '>
        ${Ingredients}
        </div>
<h1 >Tags :
<div class='tags d-flex mt-2'>
${tagsStr}
</div>
</h1>

        <div class='buttons'>
        <a href="${details.strSource}" class="text-decoration-none"><button type="button" class="btn btn-success">Source</button></a>

        <a href="${details.strYoutube}" class="text-decoration-none"><button type="button" class="btn btn-danger">Youtube</button></a>


        </div>
    </div>
</div>
</div>`);
  }

  static displayCategory(category) {
    $("#Categories .meals").append(` <div class="col-md-3">
  <div class="meal rounded-3 position-relative overflow-hidden" id='${
    category.strCategory
  }' role='button'>
      <img src='${category.strCategoryThumb}' alt="" class="w-100 ">
<div class="layer position-absolute top-0 start-0 end-0 bottom-0  rounded-3    text-center pt-2">
<h3 >${category.strCategory}</h3>
 <p>${category.strCategoryDescription.slice(0, 140)}</p>
</div>
  </div>
</div>`);
  }

  static displayDetailsCategory(meal) {
    $("#Categories .meals").append(` <div class="col-md-3">
    <div class="meal rounded-3 position-relative overflow-hidden" id='${meal.idMeal}' role='button'>
        <img src='${meal.strMealThumb}' alt="" class="w-100 ">
  <div class="layer position-absolute top-0 start-0 end-0 bottom-0  rounded-3  d-flex align-items-center">
  <h3>${meal.strMeal}</h3>
  </div>
    </div>
  </div>`);
  }

  static displayArea(area) {
    $("#areas .areas").append(`<div class="area col-md-3 text-white text-center" role='button' id='${area.strArea}'>
    <i class="fa-solid fa-house-laptop fa-4x "></i>
    <h1>${area.strArea}</h1>
</div>`);
  }

  static displayMealsArea(meal) {
    $("#areas .areas").append(` <div class="col-md-3">
  <div class="meal rounded-3 position-relative overflow-hidden" id='${meal.idMeal}' role='button'>
      <img src='${meal.strMealThumb}' alt="" class="w-100 ">
<div class="layer position-absolute top-0 start-0 end-0 bottom-0  rounded-3  d-flex align-items-center">
<h3>${meal.strMeal}</h3>
</div>
  </div>
</div>`);
  }

  static displayIngredients(ingredient) {
    if (ingredient.strDescription) {
      let Description = ingredient.strDescription.slice(0, 110);

      $("#Ingredients .ingredients")
        .append(`<div class="ingredient col-md-3 d-flex flex-column text-center text-white" role="button" id="${ingredient.strIngredient}">
    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
    <h1 class='fs-3'>${ingredient.strIngredient}</h1>
    <p>${Description}</p>
</div>`);
    }
  }
  static displayFilteredIngredient(meal) {
    $("#Ingredients .ingredients").append(` <div class="col-md-3">
    <div class="meal rounded-3 position-relative overflow-hidden" id='${meal.idMeal}' role='button'>
        <img src='${meal.strMealThumb}' alt="" class="w-100 ">
  <div class="layer position-absolute top-0 start-0 end-0 bottom-0  rounded-3  d-flex align-items-center">
  <h3>${meal.strMeal}</h3>
  </div>
    </div>
  </div>`);
  }

 static addLoading(){
    $('.loading').removeClass('d-none').addClass('d-flex') 
  }
static removeLoading(){
  $('header').removeClass('d-none').addClass('d-flex')

  $('.loading').removeClass('d-flex').addClass('d-none')
}
}
