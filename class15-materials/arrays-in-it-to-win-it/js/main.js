//Create an array of movies with at least three movies.
let movies = ["Harry Potter", "Fast and Furious", "Superman "];
//Using the array from above, store the first movie in a variable

superman = movies[0];

//Get the length of the original array and store it in a new variable
let movieLen = movies.length;

//Get the last element in that array and store it in a new variable.
// What if your array was really large and you didn't know the last index? Would your solution still work?
let lastEleme = movies[movies.length - 1];

console.log(lastEleme);

let bestColors = ["green", "blue", "red", "yellow"];
bestColors.forEach((x, i) => console.log(x));
