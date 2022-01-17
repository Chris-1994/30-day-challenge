//---Easy
//create a function that adds two numbers and alerts the difference
function diffbetweenTwNum(n1, n2) {
  alert(n1 - n2);
}
//create a function that divides two numbers and console logs the quotient
function quotient(n1, n2) {
  console.log(n1 / n2);
}

//create a function that multiplys four numbers and returns the product

function multiNum(n1, n2, n3, n4) {
  console.log(n1 * n2 * n3 * n4);
}

//---Medium
//create a function that takes in four numbers.
// Add the first two numbers and return the remainder of dividing the
// sum of the first two numbers by the difference of the last two numbers
function fourNumDiv(n1, n2, n3, n4) {
  let num = n1 + n2;
  console.log(num % (n3 - n4));
}
fourNumDiv(5, 5, 4, 1);

//---Hard
//create a function that takes in 4 numbers.
// Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and
// console log the value. If the product is less that 100,
// subtract the difference of the last two numbers and console log the value.
// If the product is 100, multiply the first three numbers together
// and alert the remainder of dividing the fourth number

function calculateFourNum(n1, n2, n3, n4) {
  let num = n1 * n2;
  if (num > 100) {
    console.log(n3 + n4);
  } else if (num == 100) {
    console.log((n1 * n2 * n3) / n4);
  } else {
    let diff = n3 - n4;
    console.log(diff);
  }
}

calculateFourNum(100, 20, 50, 80);
