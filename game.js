//randomly select a word for the player


var selectFood = ["pizza", "sandwich", "taco", "burrito", "hamburger", "spaghetti"];

var randomFood = function (){
  var guessFood = selectFood[Math.floor(Math.random()* 6)];
  console.log(guessFood);
}

randomFood();
