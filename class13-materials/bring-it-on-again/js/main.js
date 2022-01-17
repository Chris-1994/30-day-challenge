// *Variables*
// Declare a variable, assign it a value, and alert the value
let val = 5;
//alert(val);

// Create a variable, divide it by 10, and console log the value
let sleep = 3 / 10;
console.log(sleep);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThreeAlert(n1, n2, n3) {
  alert(n1 * n2 * n3);
}
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function addSubLog(n1, n2, n3, n4) {
  const val = n1 + n2 - n3 - n4;
  console.log(val);
}
addSubLog(1, 2, 3, 4);
// *Conditionals*
// Create a function that takes in 3 numbers.
// Starting with 100 add the first number, subtract the second, and divide the third.
// If the value is greater then 25, console log "WE HAVE A WINNNA"
function jumjanii(n1, n2, n3) {
  let val = (100 + n1 - n2) / n3;
  if (val > 25) {
    console.log("WE HAVE A WINNNA");
  }
}

// Create a function that takes in a day of the week.
// If it is a weekend alert, "weekend" and if not alert "week day".
// Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function getDay(day) {
  if (String(day) == "undefined") {
    console.log("Try again");
  } else {
    day.toLowerCase();
    if (day == "saturday" || day == "sunday") {
      console.log("weekend");
    } else if (day == " ") {
      console.log("Try again!");
    } else {
      console.log("week day");
    }
  }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function createLoop(n1) {
  for (let i = 1; i <= n1; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
}

createLoop(50);
