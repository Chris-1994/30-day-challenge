// *Variables*
// Create a variable and alert log the value
let val = 5;
//alert(val);
// Create a variable, add -15 to it, and print the value to the console

let value = 15;
value -= 15;
console.log(value);
// *Functions*
// Create a function that multiplys 4 numbers and alerts the product
function multiplys(n1, n2, n3, n4) {
  alert(n1 * n2 * n3 * n4);
}

// Create a function that divides one number by another and returns the remainder plus 10
function divide(n1, n2) {
  return (n1 % n2) + 10;
}

// *Conditionals*
// Create a function that adds three numbers and if the sum is greater than 1000 alert "Block Party"
function blockParty(n1, n2, n3) {
  if (n1 + n2 + n3 > 1000) {
    alert("Block Party");
  }
}

// Create a function that divides five numbers and if the quotient is divisible by 5 alert LINCOLN

function quotient(n1, n2, n3, n4, n5) {
  let reminder = n1 / n2 / n3 / n4 / n5;
  if (reminder % 5 == 0) {
    alert("Lincoln");
  }
}

//*Loops*
//Create a function that takes in a word and a number.
//Console log the word x cubed times where x was the number passed in
function wordYeller(word, n1) {
  for (let i = 0; i < Math.pow(n1, 3); i++) {
    console.log(word);
  }
}
function printWordXTimes(word, num) {
  for (let i = 0; i < Math.pow(num, 3); i++) {
    console.log(word);
  }
}
printWordXTimes("party", 3);
//wordYeller("dance", 3);
