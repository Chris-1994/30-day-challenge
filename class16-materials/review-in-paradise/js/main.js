// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let paradise = "kanelbollar";
paradise = "pizza";
//alert(paradise);
//Declare a variable, assign it a string, alert the second character in the string
// (Use your google-fu and the MDN)
let kungFu = "pancakes".charAt(1);
console.log(kungFu);

// *Functions*
// Create a function that takes in 3 numbers.
// Divide the first two numbers and multiply the last. Alert the product. Call the function.
function multiDivThreeNum(n1, n2, n3) {
  let product = ((n1 / n2) * n3).toFixed(2);
  //alert(product);
  console.log(product);
}

multiDivThreeNum(2, 3, 4);
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function cubeRoot(n1) {
  console.log(Math.cbrt(n1));
}

// *Conditionals*
//Create a function that takes in a month.
// If it is a summer month alert "YAY". If another other month, alert "Booo"
function monthPeriod(month) {
  let lowerCaseMonth = month.toLowerCase();
  if (
    lowerCaseMonth == "june" ||
    lowerCaseMonth == "july" ||
    lowerCaseMonth == "august"
  ) {
    alert("YAY");
  } else {
    alert("Boo");
  }
}

//*Loops*
//Create a function that takes in a number.
//Console log every number from 1 to that number while skipping multiples of 5.

function loopy(n1) {
  for (let i = 1; i < n1; i++) {
    if (i % 5 != 0) {
      console.log(i);
    }
  }
}

loopy(25);
