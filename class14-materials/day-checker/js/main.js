//Create a conditonal that checks the day
let check = document.querySelector("h1").addEventListener("click", whatDayIsIt);

function whatDayIsIt() {
  const whatDay = document.querySelector("#whatDay").value.toLowerCase();
  const whatHouse = document.querySelector("#whatHouse").value.toLowerCase();
  let h1 = document.querySelector("h1");
  let p = document.querySelector("p");
  if (whatDay == "tuesday" || whatDay == "thursday") {
    p.innerText = "tell them they have class";
  } else if (whatDay == "saturday") {
    p.innerText = "tell them they have Office Hours";
  } else if (whatDay == "friday" && whatHouse == "turing") {
    p.innerText = "they have private office hours";
  } else if (whatDay == "wednesday" && whatHouse == "hopper") {
    p.innerText = "tell them they have private office hours";
  } else if (whatDay == "Monday" && whatHouse == "Hamilton") {
    p.innerText = "tell them to book a 1on1";
  } else {
    p.innerText = "tell them to study";
  }
}
//If Tuesday or Thursday, tell them they have class
//If Saturday, tell them they have Office Hours
//If Friday and House Turing, they have private office hours
//If Wednesday and House Hopper, tell them they have private office hours
//If Monday and House Hamilton, tell them to book a 1on1
//If any other day or wrong house, tell them to study

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
