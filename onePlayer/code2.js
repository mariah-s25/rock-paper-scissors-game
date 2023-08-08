var score = localStorage.getItem("score");
var res = localStorage.getItem("result");

var playerClass = localStorage.getItem("playerClass");
var houseClass = localStorage.getItem("houseClass");

var playerSvg = localStorage.getItem("playerSvg");
var houseSvg = localStorage.getItem("houseSvg");

if(score > 5){
  announce = "Congrats! You won the game!";
}
else if(score < 5){
  announce = "Hardluck! You lost";
}
else {
  announce = "It's a tie";
}

function back(){
  location.href = "index.html";
}