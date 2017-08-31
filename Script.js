$(document).ready(function(){
  $( "#title" ).click(function() {
    $(".frame").effect("shake");
    $("#drawbox").animate({backgroundColor: "#ff0000"}, 5000);
  });
})
