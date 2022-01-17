//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let newARrr = [1, 2, 3, 4, 5, 6];
console.log(newARrr.reduce((element, index) => element + index, 0));

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
newARrr.forEach((element, index) => console.log(Math.sqrt(element * 2)));
let newArr = newARrr.map((num) => num ** 2);
console.log(newArr);
//Create a function that takes string
//Print the reverse of that string to the console
function reverseText(string) {
  var newString = "";
  for (var i = string.length - 1; i >= 0; i--) {
    console.log(i);
    newString += string[i];
  }
  return newString;
}
//console.log("Hello".length - 1);
console.log(reverseText("elon"));

console.log("helllo".split().reverse().join(""));
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function checkIfPalindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}

console.log(checkIfPalindrome("A man, a plan, a canal, Panama"));
let paldi = (str) => str === str.split("").reverse().join();
paldi("leonnoel");
