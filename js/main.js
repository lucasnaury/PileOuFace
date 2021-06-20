$(document).ready(function () {
  //VARIBALES
  var firstClick = true;
  var randomNum;
  var endNum = 0;
  var flexDirection;

  //Initialize variables
  checkFlexAlignment();

  $(window).resize(()=>{
    checkFlexAlignment();
  });


  //BUTTON
  $("button").click(()=>{
    if($("button").html() == "Choose"){
      $("button").html("Restart");
      randomSelect();
    }
    else if($("button").html() == "Restart"){
      restart();
      randomSelect();
    }
  });

  //FUNCTIONS
  function randomSelect(){
    $(".card-container").addClass("active");

    randomNum = 6 + Math.floor(Math.random() * 2);
    endNum += randomNum;
    endNum = endNum%2; //If even, the end face is PILE, If not, FACE
    $(".card-container.active").css("--number-of-turns",randomNum);
    /*Debug:
    console.log("Random num : "+randomNum);
    console.log("End num : "+endNum)*/
  }

  function restart(){
    //Remove existing cards and reset container
    $("#left").remove();
    $("#right").remove();
    $(".card-container").removeClass("active");
    //By default, reset the cards the same as the beginning
    //Set the cards to start on PILE
    var text = `<div class="card" id="left">Pile</div>
                <div class="card" id="right">Face</div>`;
    if(endNum == 1){//If the card ends on FACE
      //Invert the cards to start on FACE
      text = `<div class="card" id="left">Face</div>
              <div class="card" id="right">Pile</div>`;
    }
    $(".card-container").append(text);
  }

  function checkFlexAlignment(){
    console.log("check");
    flexDirection = $(".card-container").css('flex-direction');
    if(flexDirection == "column"){
      //If small screen, vertical align
      $(".card-container").addClass("vertical");
      $(".card-container").removeClass("horizontal");
    }else{
      //Horizontal by default
      $(".card-container").addClass("horizontal");
      $(".card-container").removeClass("vertical");
    }
  }
});
