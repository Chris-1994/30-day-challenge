//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
let age = 20;
if (age < 16) {
  console.log("you can't drive");
} else if (age < 18) {
  console.log(
    "they can't hate from outside the club, because they can't even get in"
  );
} else if (age < 21) {
  console.log("You can't drink");
} else if (age < 25) {
  console.log("You can not rent cars affordably");
} else if (age < 31) {
  console.log("You can not rent fancy cars affordably");
} else if (age >= 30) {
  console.log("There is nothing left to look forward too");
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

let h1 = document.querySelector("h1");
h1.addEventListener("click", updatePtagText);
document.querySelector("p").innerHTML = h1.value;

function updatePtagText() {
  return h1.value;
}
