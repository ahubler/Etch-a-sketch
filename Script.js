var gridSize = 10;//stores the size of the drawimg grid
var drawStyle = "black";//stores the current drawing style

function buildGrid(){
  //Compute the percentage height and width of each new div by
  //100 by the gridSize
  var pixelSizePercent = 100 / gridSize;
  var pixel = $("<div></div>",{
                                class : "pixel",
                                height : pixelSizePercent + "%",
                                width : pixelSizePercent + "%"
                              });
  $("#drawbox").empty();//removes any existing pixels
  var totalSize = gridSize * gridSize;
  for(i = 1; i <= totalSize; i++){
    $("#drawbox").append($(pixel).clone());
    if(i === 1){$(".pixel").last().css({
                                        "border-radius": "30px 0px 0px 0px",
                                        "-moz-border-radius": "30px 0px 0px 0px",
                                        "-webkit-border-radius": "30px 0px 0px 0px"
                                      });
    }
    else if(i == gridSize){$(".pixel").last().css({
                                        "border-radius": "0px 30px 0px 0px",
                                        "-moz-border-radius": "0px 30px 0px 0px",
                                        "-webkit-border-radius": "0px 30px 0px 0px"
                                       });
    }
    else if(i === totalSize - gridSize +1){$(".pixel").last().css({
                                        "border-radius": "0px 0px 0px 30px",
                                        "-moz-border-radius": "0px 0px 0px 30px",
                                        "-webkit-border-radius": "0px 0px 0px 30px"
                                       });
    }
    else if(i === totalSize ){$(".pixel").last().css({
                                        "border-radius": "0px 0px 30px 0px",
                                        "-moz-border-radius": "0px 0px 30px 0px",
                                        "-webkit-border-radius": "0px 0px 30px 0px"
                                       });
    }
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
