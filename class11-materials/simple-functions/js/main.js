//create a function that adds two numbers and alerts the sum

function addTwoNumbers(num1, num2) {
  const result = num1 + num2;
  console.log(result);
}

//create a function that multiplys three numbers and console logs the product
function multiplysThreeNums(num1, num2, num3) {
  const result = num1 * num2 * num3;
  console.log(result);
}
//create a function that divides two numbers and returns the ???
function divideTwoNumbers(num1, num2) {
  const result = num1 / num2;
  return result;
}

num1 = 10;
num2 = 2;
num3 = 50;
addTwoNumbers(num1, num2);
multiplysThreeNums(num1, num2, num3);
let result = divideTwoNumbers(num1, num2);
console.log(result);
