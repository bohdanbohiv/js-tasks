//Grasshopper - Messi goals function

function goals (laLigaGoals = '5', copaDelReyGoals = '10', championsLeagueGoals = '2') {
return (laLigaGoals+copaDelReyGoals+championsLeagueGoals)
}


//Grasshopper - Terminal game move function

function move(position, roll) {
    return position + (roll * 2)
}


//Grasshopper - Personalized Message

function greet (name, owner) {
  if (name == owner) {
  return 'Hello boss';
  } else {
  return 'Hello guest';
  }
}


//Keep Hydrated!

function litres(time) {
  return Math.floor(time / 2);
}
