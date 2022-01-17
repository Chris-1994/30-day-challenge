// *Variables*
// Create a variable and console log the value
// const test = "Sam";
// console.log(test);
// Create a variable, add 10 to it, and alert the value
// let addTentoIt = 10;
// let stad = addTentoIt + test;
// alert(stad);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNumbers(num1, num2, num3, num4) {
  const result = num1 - num2 - num3 - num4;
  let plusAllNumbers = num1 + num2 + num3 + num4;
  console.log(plusAllNumbers);
  let difference = result - plusAllNumbers;

  console.log(difference);
}

// subtractFourNumbers(10, 11, 1, 1);

// Create a function that divides one number by another and returns the remainder

function getTheRimderFromTwoNumbers(params, params1) {
  let reminder = params % params1;
  return reminder;
}

// console.log(getTheRimderFromTwoNumbers(7, 20));
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function alertIfSumIsMoreThan50(num1, num2) {
  let newNum = num1 + num2;
  if (newNum > 50) {
    console.log("Jumanji");
  } else {
    console.log("Less than 50");
  }
}
// alertIfSumIsMoreThan50(10, 40);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThreeNumbers(str) {
  let n = str.length;
  let digitSum = 0;
  for (let i = 0; i < n; i++) digitSum += str[i] - "0";
  return digitSum % 3 == 0;
}

//let str = "144";
//let x = multiplyThreeNumbers(str) ? "Yes" : "No";
//console.log(x);
