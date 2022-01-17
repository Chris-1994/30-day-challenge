//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let twShows = ["Rangers", "Avengers", "fast and furios"];
twShows.forEach((element) => console.log(element));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let evenNumbers = [1, 2, 3, 4, 5, 6, 7].filter((element) => element % 2 === 0);
console.log(evenNumbers);
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function arryOfNum(arr) {
  arr.forEach((element, index) => Math.sum(arr[index]));
}
let number = [1, 2, 3, 4, 5, 6, 7];
let onlyEvens = (arr) => arr.filter((num) => num % 2 === 0);
console.log(onlyEvens(number));

//arryOfNum([1, 2, 3]);

function secondLowAndHigh(arr) {
  let sorted = arr.sort((a, b) => a - b);
  console.log(sorted[1] + sorted[sorted.length - 2]);
}
secondLowAndHigh([1, 2, 3, 5, 4]);

let sorted = [1, 2, 3, 4, 5].sort((a, b) => b - a);
console.log(sorted);
