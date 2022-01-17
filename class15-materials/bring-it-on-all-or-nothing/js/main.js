// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let variable = true;

// Declare a variable, reassign it to your favorite color, and console log the value
let favcolor = "black";
favcolor = "red";
console.log(favcolor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth.
//Return the result. Call the function.
function calculteSum(n1, n2, n3, n4) {
  let val = (n1 + n2 + n3) / n4;
  return val;
}
console.log(calculteSum(1, 2, 3, 4));

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function sumUpToThePowerOf(n1, n2) {
  console.log(Math.pow(n1, n2));
}
sumUpToThePowerOf(3, 5);

// *Conditionals*
// Create a function that takes in a boolean and a string.
// If the boolean is true, alert the string. If the boolean is false, console log the string
function alertIfTrue(boolean, word) {
  if (boolean) {
    alert(word);
  } else {
    console.log(word);
  }
}

//*Loops*
//Create a function that takes in a number.
//Console log all values from 1 to that number,
//but if the number is divisible by 3 log "fizz" instea4d of that number,
//if the number is divisible by 5 log "buzz" instead of the number,
//and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function loopy(n1) {
  for (let i = 1; i < n1; i++) {
    if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else {
      console.log(i);
    }
  }
}

function loopy2(n1) {
  for (let i = 1; i <= n1; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}
loopy2(100);
