var firstScore = localStorage.getItem("firstScore");
var secScore = localStorage.getItem("secScore");
var res = localStorage.getItem("result");


var player1Svg = localStorage.getItem("player1Svg");
var player2Svg = localStorage.getItem("player2Svg");

if(firstScore > secScore){
  var announce = "Congrats! Player1 won the game!";
  var win = 1;
}
else if(firstScore < secScore){
  var announce = "Congrats! Player2 won the game!";
  var win = 2;
}
else {
  var announce = "It's a tie";
  var win = 0;
}

function back(){
  location.href = "index.html";
}