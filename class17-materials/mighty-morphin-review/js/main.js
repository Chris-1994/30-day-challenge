// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "Fall";
favHoliday = "Summer".toUpperCase();
//console.log(favHoliday);
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let sTring = "sampopLOLDAD";
let lengthOfString = Number(sTring.length);
//console.log(sTring.slice(-3));
//console.log(sTring.slice(lengthOfString - 3, lengthOfString));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function difference(n1, n2, n3, n4, n5) {
  let absolute = 100 - n1 - n2 - n3 - n4 - n5;
  console.log(Math.abs(absolute));
}
difference(118, 2, 44, 5, 5);
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function findHighLowNumber(n1, n2, n3) {
  console.log(Math.max(n1, n2, n3));
  console.log("Lowest below");
  console.log(Math.min(n1, n2, n3));
}

//findHighLowNumber(2, 500, 10);
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headOrTail() {
  if (
    Math.floor(Math.random(1) * 3) === 1 ||
    Math.floor(Math.random(1) * 3) == 2
  ) {
    return "head";
  } else {
    return "tail";
  }
}
function headsOrtails() {
  let random = Math.random();
  return random < 0.5 ? "heads" : "tails";
}

console.log(headsOrtails());

//*Loops*
//Create a function that takes in a number.
// Console log the result of heads or tails using the previous
// function x times where x is the number passed into the function. Call the function.

function spamLog(x) {
  for (let i = 0; i < x; i++) {
    console.log(headOrTail());
  }
}
spamLog(100);
