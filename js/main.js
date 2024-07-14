import { getMeals } from "./meals.js";
import { getCategories } from "./categories.js";
import { getArea } from "./area.js";
import { getIngredients } from "./ingredient.js";
import { UI } from "./ui.js";
import { getMealsByName, getMealsByLetter } from "./search.js";

import { validation } from "./regex.js";

export let widthMenu;



getMeals();
$('#Categories , #areas, #Ingredients').hide()

 function open() {
  $(".nav-header #bars").click(function () {
    widthMenu = $(".menu").outerWidth();
    let widthnavheader = $(".nav-header").outerWidth();
    console.log(widthnavheader);

    console.log(widthMenu);
    $(".nav-header #bars").replaceWith(
      '<i class="fa-solid fa-xmark fs-1" id="close" role="button"></i>'
    );
    $(".menu").animate({ "margin-left": `0px` }, 500, function () {
      for (let i = 0; i < 5; i++) {
        $(".navbar-nav .nav-link")
          .eq(i)
          .animate(
            {
              "margin-top": `0px`,
            },
            (i + 5) * 100
          );
      }
    });

    close(widthMenu);
  });
}
open();

 function close(widthMenu) {
  $("#close").click(function () {
    $(
      ".nav-header #close"
    ).replaceWith(`<i class="fa-solid fa-bars fs-1 " id="bars" role="button"></i>
        `);
    $(".navbar-nav .nav-link").animate(
      {
        "margin-top": "25px",
      },
      500
    );
    $(".menu").animate({ "margin-left": `-${widthMenu}px` }, 500);

    open();
  });
}

export function closeMenu(widthMenu){
  $(
    ".nav-header #close"
  ).replaceWith(`<i class="fa-solid fa-bars fs-1 " id="bars" role="button"></i>
      `);
  $(".navbar-nav .nav-link").animate(
    {
      "margin-top": "30px",
    },
    500
  );
  $(".menu").animate({ "margin-left": `-${widthMenu}px` }, 500);
open()
}


$(".nav-link").click(function () {
  $(".menu").animate({ "margin-left": `-${widthMenu}px` }, 500);
  $(".navbar-nav .nav-link").animate(
    {
      "margin-top": "30px",
    },
    500
  );
  $(
    ".nav-header #close"
  ).replaceWith(`<i class="fa-solid fa-bars fs-1 " id="bars" role="button"></i>
            `);
  open();
  close();
});



// search
$("#search").click(function () {
  clearSections();
  $("#Search").show()
  $("#Meals").show();
  $("#Meals .container").removeClass("p-lg-5").removeClass("pt-5").addClass('pb-5');

  UI.displaySearch(function () {
    
    getMeals();
  });

  $("#mealName").keyup(function () {
    let mealName = $(this).val();
    console.log(mealName);
    $("#meals").empty();
    $('.loadingForSearch').removeClass('d-none').addClass('d-flex')
    
    getMealsByName(mealName);
  });
  $("#mealLetter").keyup(function () {
    let mealLetter = $(this).val();
    console.log(mealLetter);
    $("#meals").empty();
    $('.loadingForSearch').removeClass('d-none').addClass('d-flex')
    if(mealLetter=='' || mealLetter==' '){
      getMealsByLetter('a')
    }
    
    getMealsByLetter(mealLetter);

  });
});

$("#Category").click(function () {

  clearSections();
  $("#Categories , #Categories .meals").show();
  UI.addLoading()
  getCategories();
});

$("#area").click(function () {
 
  clearSections();
  $("#areas , #areas .areas").show();
  UI.addLoading()
  getArea();
});

$("#ingredient").click(function () {

  clearSections();
  $("#Ingredients").show();
  UI.addLoading()
  getIngredients();
});

$("#contact").click(function () {
  UI.removeLoading()
  clearSections();
  $("#Contact").show();
  $('input').val('')
  
  $("#Name").children("div").hide();
  $("#Email").children("div").hide();
  $("#Phone").children("div").hide();
  $("#Age").children("div").hide();
  $("#Pass").children("div").hide();
  $("#Repass").children("div").hide();

  

});

export function clearSections() {
  $(
    "#Search , #Meals #meals , #Categories .meals , #areas .areas , #details ,#Ingredients .ingredients "
  ).empty();
  $("#Meals , #Categories , #areas , #Ingredients ,#Search ,#Contact").hide();
  $("#details").removeClass("d-block").addClass("d-none");
}

// input in contact
  let UserName , UserEmail ,UserPhone ,UserAge , UserPass ,Repassword;
  
$("#UserName").keyup(function () {
  UserName = $(this).val();
  console.log(UserName);
  if (!validation.validateName(UserName)) {
    $("#Name").children("div").show();
  } else {
    $("#Name").children("div").hide();
  }
});

$("#UserEmail").keyup(function () {
  UserEmail = $(this).val();
  if (!validation.validateEmail(UserEmail)) {
    $("#Email").children("div").show();
  } else {
    $("#Email").children("div").hide();
  }
});

$("#UserPhone").keyup(function () {
  UserPhone = $(this).val();
  if (!validation.validatePhone(UserPhone)) {
    $("#Phone").children("div").show();
  } else {
    $("#Phone").children("div").hide();
  }
});
$("#UserAge").on('input',function () {
  UserAge = $(this).val();
  if (!validation.validateAge(UserAge) ) {
    $("#Age").children("div").show();
  } else {
    $("#Age").children("div").hide();
  }
});

$("#UserPass").keyup(function () {
  UserPass = $(this).val();
  console.log(UserPass);
  if (!validation.validatepass(UserPass)) {
    $("#Pass").children("div").show();
  } else  {
    $("#Pass").children("div").hide();
  }
if(validation.validateRepass(UserPass, Repassword)) {
  $("#Repass").children("div").hide(); 

}
})


$("#Repassword").on('input',function () {
  Repassword = $(this).val();
  // console.log(Repassword);
  // console.log(UserPass);
  if(!UserName && !UserEmail && !UserPhone && !UserPass && !UserAge  ){
    $("#Name").children("div").show();
    $("#Email").children("div").show();
    $("#Phone").children("div").show();
    $("#Age").children("div").show();
    $("#Pass").children("div").show();

  }
 
  if ( !validation.validatepass(Repassword) || !validation.validateRepass(UserPass, Repassword)) {
    $("#Repass").children("div").show();
  } else {
    $("#Repass").children("div").hide();
  }
});


  let intrval=setInterval(function(){
  if(UserName && UserAge && UserEmail && UserPass && UserPhone && Repassword !=null){
    checkvalidation()
  }
 
});


function checkvalidation(){
  if (
    validation.validateName(UserName) &&
    validation.validateEmail(UserEmail) &&
    validation.validatePhone(UserPhone) &&
    validation.validateAge(UserAge) &&
    validation.validatepass(UserPass) &&
    validation.validateRepass(UserPass, Repassword) 
  ) {
    $('#submitBtn').removeAttr('disabled')
  }
  else{
    $('#submitBtn').attr('disabled',true)

    console.log(UserEmail);
  }
}
$('#submitBtn').click(function(){
  $('input').val('')
console.log(UserAge);
  $('#submitBtn').attr('disabled',true)
  clearInterval(intrval)
})


