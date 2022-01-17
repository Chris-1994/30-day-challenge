// *Variables*
// Declare a variable and assign it to your fav drink as a string.
// Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = " cola".trim();
favDrink = "Fanta";
console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let apple = "Word Apple Strawberry Orange Juice";
if (apple.search("apple") !== -1) {
  console.log("yes");
} else {
  console.log("no");
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
  let r = Math.random();
  if (r <= 0.3) {
    return "rock";
  } else if (r <= 0.6) {
    return "paper";
  } else if (r <= 1) {
    return "scissors";
  }
}

console.log(rockPaperScissors());
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function humanVsBotRockPaperSci(humpanChoice) {
  random_n = Math.random();
  let bot = "";
  if (random_n < 0.3) {
    bot = "rock";
  } else if (random_n < 0.6) {
    bot = "scissors";
  } else if (random_n <= 1) {
    bot = "paper";
  }
  console.log(`Bot picked: ${bot}`);

  if (humpanChoice === "paper" && bot == "paper") {
    console.log("It's even");
  } else if (humpanChoice === "paper" && bot == "scissors") {
    console.log("Bot won");
  } else if (humpanChoice === "paper" && bot === "rock") {
    console.log("Player won");
  } else if (humpanChoice === "rock" && bot == "rock") {
    console.log("it's even");
  } else if (humpanChoice === "rock" && bot === "paper") {
    console.log("Bot won");
  } else if (humpanChoice === "rock" && bot === "scissors") {
    console.log("Player won");
  } else if (humpanChoice === "scissors" && bot === "scissors") {
    console.log("It's even");
  } else if (humpanChoice === "scissors" && bot === "rock") {
    console.log("Bot won");
  } else if (humpanChoice === "scissors" && bot === "paper") {
    ("Player won");
  }
}
// humanVsBotRockPaperSci("rock");
//*Loops*
//Create a function that takes an array of choices.
// Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function numX(arr) {
  arr.forEach((element, index) => {
    kingOfTheHill = Math.random();
    let random_n = Math.random() * element;

    if (random_n < kingOfTheHill) {
      console.log("Winner is random player");
    } else {
      console.log("Winner is the bot!");
    }
  });
}
// numX([1, 2, 3, 4, 5]);

function playGame(arr) {
  arr.forEach((choice, index) => {
    humanVsBotRockPaperSci(choice);
  });
}

playGame(["rock", "rock", "paper"]);
