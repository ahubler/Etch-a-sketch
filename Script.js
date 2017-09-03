var gridSize = 10;//stores the size of the drawimg grid
var drawStyle = "black";//stores the current drawing style

function buildGrid(){
  //Compute the height and width of each new div by dividing
  //the height and width of the drawBox div by the gridSize
  var pixelHeight = $("#drawbox").innerHeight() / gridSize;
  var pixelWidth = $("#drawbox").innerWidth() / gridSize;
  var pixel = $("<div></div>",{
                                class : "pixel",
                                height : pixelHeight,
                                width : pixelWidth
                              });
  $("#drawbox").empty();//removes any existing pixels
  for(i = 1; i <= gridSize * gridSize; i++){
    $("#drawbox").append($(pixel).clone());
  }
  return;
}

function draw(myPixel){
  $(myPixel).css("background-color","#000000");
  return;
}

$(document).ready(function(){
  buildGrid();

  $("#clear").click(function(){//shake, clear, and prompt for new size
    $(".frame").effect("shake", function(){//this function only runs when the effect is complete
      gridSize = prompt("What size would you like?", gridSize);
      if (isNaN(gridSize)||gridSize === null){gridSize = 10;}//invalid size defaults to 10
      buildGrid();//builds new grid of pixels
      });
  });

  $("button").click(function() {//when a new style is chosen
    $("button").removeClass("active-Button");
    $(this).toggleClass("active-Button");
    drawStyle = $(this).text();
  });

  $("#drawbox").on('mouseenter',".pixel",function(){
    draw(this);
  })
})
