$(document).ready(function() {
$("form#hogwarts").submit(function(event) {

$("#troy").text = "";
var whistle =$("input#age").val();
for (i=1; i<=whistle; i++){
  $("#troy").prepend("<p>" + i +" Bottles of beer on the wall " + i + " bottles of beer, take one down pass it around " + (i-1) + " bottles of beer on the wall</p>");
  $("p:eq(20)" ).remove();
}


var musicVar = $("#music").val()
if(musicVar === "classical") {
  $("iframe").hide();
  $("#classicalIframe").show();
}else if (musicVar ==="hiphop"){
  $("iframe").hide();

  $("#hiphopeIframe").show();
}else if (musicVar ==="country"){
  $("iframe").hide();

$("#countryIframe").show();
}else if (musicVar ==="celine"){
  $("iframe").hide();

  $("#celineIframe").show();
}


event.preventDefault();


});


});
