//Grasshopper - Messi goals function: https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals(
  laLigaGoals = "5",
  copaDelReyGoals = "10",
  championsLeagueGoals = "2"
) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//Grasshopper - Terminal game move function: https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move(position, roll) {
  return position + roll * 2;
}

//Grasshopper - Personalized Message: https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet(name, owner) {
  if (name == owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

//Keep Hydrated!: https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  return Math.floor(time / 2);
}
