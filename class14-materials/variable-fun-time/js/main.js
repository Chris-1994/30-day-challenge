//--- Easy
//create a variable and assign it a boolean
let name = true;
//create a variable and assign it a string that is a number
let b = "5";

//add 10 to that number - how?!? https://media.giphy.com/media/lkdH8FmImcGoylv3t3/giphy.gif
b = Number(b) + 10;

//print that number to the console
console.log(b);
//--- Medium
//create a variable that holds a value from the input

//document.querySelector("#mrRightNow").addEventListener("click", add21);

function add21() {
  let inp = Number(document.querySelector("input").value);
  //add 21 to that number
  inp += 21;
  //alert that number
  alert(inp);
}

//--- Hard
//create a variable that holds the h1

let mrRightnow = document.querySelector("#mrRightnow");

mrRightnow.addEventListener("click", stunt);

function stunt() {
  document.querySelector("#needSomeTLC").innerText = num * num;
}
