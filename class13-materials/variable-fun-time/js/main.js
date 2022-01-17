//--- Easy
//create a variable and assign it a number
let numb = 25;

//minus 10 from that number

numb = numb - 10;

//print that number to the console
console.log(numb);

//--- Medium
//create a variable that holds a value from the input

let userInput = document.querySelector("#danceDanceRevolution").value;
//add 25 to that number

userInput = userInput + 25;

//alert that number
alert(userInput);

//--- Hard
//create a variable that holds the h1
let h1 = document.querySelector("h1");
console.log(h1);
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener("click", sum);
function sum() {
  console.log(Number(numb) + Number(userInput));
}
