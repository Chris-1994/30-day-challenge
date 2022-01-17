//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
[1, 2, 3, 4, 5].reduce((sum, current) => sum + current, 0);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareRoot(arr) {
  arr.reduce((sum, current) => {
    return Math.sqrt(sum) + current, 0;
  });
}

function getSquare(arr) {
  return arr.map((element, index) => {
    return Math.pow(element, 2);
  });
}
console.log(getSquare([10, 2]));

//squareRoot([1, 2]);

//Create a function that takes string
//Print the reverse of that string to the console
function reverseStr(string) {
  return string.split("").reverse().join("");
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function checkIfPalindrome(string) {
  var re = /[\W_]/g;
  var lowRegStr = string.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}
console.log(checkIfPalindrome("A man, a plan, a canal. Panama"));
