// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation.
// Print the affirmation to the console multiple times using a method
let affirmation = "happy man";
function PrintHappyman(x) {
  this.printHappyman = function () {
    for (let i = 0; i < x; i++) {
      console.log(affirmation);
    }
  };
}

let postivieAff = "You are beautiful";
console.log(`Again: ${postivieAff.repeat(24)}`);

const affr = new PrintHappyman(1).printHappyman();

//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it
let newWords = ["B", "A", "D"].join("");
console.log(newWords);
// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
function realRandom() {
  randomInt = Math.random() * 100;
  if (randomInt < 20) {
    return "rock";
  } else if (randomInt < 40) {
    return "paper";
  } else if (randomInt < 60) {
    return "lizard";
  } else if (randomInt < 80) {
    return "spock";
  } else {
    return "scissors";
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock)
//and determines if they won a game of rock paper scissors against a bot using the above function

function whoTheWinner(choice) {
  bot = realRandom();
  if (
    (choice == "scissors" && bot == "paper") ||
    (choice == "paper" && bot == "rock") ||
    (choice == "rock" && bot == "lizard") ||
    (choice == "lizard" && bot == "spock") ||
    (choice == "spock" && bot == "scissors") ||
    (choice == "scissors" && bot == "lizard") ||
    (choice == "lizard" && bot == "paper") ||
    (choice == "paper" && bot == "spock") ||
    (choice == "spock" && bot == "rock") ||
    (choice == "rock" && bot == "scissors")
  ) {
    console.log("I won");
  } else if (choice == bot) {
    console.log("TIE");
  } else {
    console.log("BOT WON");
  }
}

whoTheWinner("rock");
