gridSize = 10;//stores the size of the drawimg grid
$(document).ready(function(){
  $( "#title" ).click(function() {
    $(".frame").effect("shake");
    $("#drawbox").animate({backgroundColor: "#ff0000"}, 5000);
  });
})
