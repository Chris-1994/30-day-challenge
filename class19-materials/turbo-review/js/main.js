// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let newMan = "Do you have a duck in your bed?";
if (newMan.includes("?")) {
  console.log("This is a question");
}
//Declare a variable, assign it a string of multiple words,
// replace every "jr. dev" with "software engineer", and print it to the console
let multiWords = "jr dev jr dev man lolrd lord sit tight jr dev man lolrd"
  .replace("jr", "software engineer")
  .replace("dev", "software engineer");
console.log(multiWords);

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperscissors() {
  choice = Math.random();
  if (choice < 0.3) {
    return "rock";
  } else if (choice < 0.6) {
    return "paper";
  } else {
    return "scissors";
  }
}

// *Conditionals*
//Create a function that takes in a choice
// (rock, paper, or scissors) and determines
//if they won a game of rock paper scissors against a bot using the above function

function playerChoice(choice) {
  bot = rockPaperscissors();
  if (
    (choice == "rock" && bot == "scissors") ||
    (choice == "paper" && bot == "rock") ||
    (choice == "rock" && bot == "scissors") ||
    (choice == "scissors" && bot == "paper")
  ) {
    console.log("Human Won");
  } else if (choice == bot) {
    console.log("TIE");
  } else {
    console.log("Bot won");
  }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGame(arr) {
  arr.forEach((element) => playerChoice(element));
}
playGame(["rock", "rock", "rock"]);
