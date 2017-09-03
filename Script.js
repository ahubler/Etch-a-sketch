var gridSize = 10;//stores the size of the drawimg grid
var drawStyle = 0;//stores the current drawing style

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
                                        "border-radius" : "30px 0px 0px 0px",
                                        "-moz-border-radius" : "30px 0px 0px 0px",
                                        "-webkit-border-radius" : "30px 0px 0px 0px"
                                      });
    }
    else if(i == gridSize){$(".pixel").last().css({
                                        "border-radius" : "0px 30px 0px 0px",
                                        "-moz-border-radius" : "0px 30px 0px 0px",
                                        "-webkit-border-radius" : "0px 30px 0px 0px"
                                       });
    }
    else if(i === totalSize - gridSize +1){$(".pixel").last().css({
                                        "border-radius" : "0px 0px 0px 30px",
                                        "-moz-border-radius" : "0px 0px 0px 30px",
                                        "-webkit-border-radius" : "0px 0px 0px 30px"
                                       });
    }
    else if(i === totalSize ){$(".pixel").last().css({
                                        "border-radius" : "0px 0px 30px 0px",
                                        "-moz-border-radius" : "0px 0px 30px 0px",
                                        "-webkit-border-radius" : "0px 0px 30px 0px"
                                       });
    }
  }
  return;
}

function getRandomColor(){//builds and returns a random rgb color
  var newRGB = "rgb(";
  for(i = 1; i <= 3; i++){
    newRGB = newRGB + Math.floor(Math.random() * 255 + 1) + ","
  }
  newRGB = newRGB.substr(0, newRGB.length - 1)+ ")";
  return(newRGB);
}

function draw(myPixel){
  switch (drawStyle) {
    case 0 ://black
      $(myPixel).css({
                      "background-color" : "#000",
                      "opacity" : "1"
                    });
      break;
    case 1 ://random RGB
      var randRGB = getRandomColor();
      $(myPixel).css({
                      "background-color" : randRGB,
                      "opacity" : "1"
                    });
      break;
    case 2 ://shading
      switch ($(myPixel).css("background-color")) {
        case "rgb(1, 1, 1)" :
          switch ($(myPixel).css("opacity")){
            case "0.1" :
              $(myPixel).css("opacity","0.2");
              break;
            case "0.2" :
              $(myPixel).css("opacity","0.3");
              break;
            case "0.3" :
              $(myPixel).css("opacity","0.4");
              break;
            case "0.4" :
              $(myPixel).css("opacity","0.5");
              break;
            case "0.5" :
              $(myPixel).css("opacity","0.6");
              break;
            case "0.6" :
              $(myPixel).css("opacity","0.7");
              break;
            case "0.7" :
              $(myPixel).css("opacity","0.8");
              break;
            case "0.8" :
              $(myPixel).css("opacity","0.9");
              break;
            case "0.9" :
              $(myPixel).css("opacity","1.0");
              break;
          }
          break;
        default :
          $(myPixel).css({
                          "background-color" : "rgb(1, 1, 1)",
                          "opacity" : "0.1"
                        });
          break;
      }
      break;}
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
    drawStyle = $("button").index(this);
  });

  $("#drawbox").on('mouseenter',".pixel",function(){
    draw(this);
  })
})
