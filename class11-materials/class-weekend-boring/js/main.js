//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)
// do something new, change the pattern

// get id for check, listen to the click
document.querySelector("#check").addEventListener("click", click);

// create a function that checks the ID by day, make sure to change it to lowercase
function click() {
  const day = document.querySelector("#day").value.toLowerCase();
  if (day == "friday") {
    console.log("THIS IS YOUR DAY");
  } else if (day == "monday") {
    console.log(
      "Day by day, work towards your goals, how much can you acomplish during 10 years?"
    );
  } else if (day == "tuesday") {
    console.log(
      "Why should I contiune doing this for 3 months? It's a goal as easy as that"
    );
  } else {
    console.log("Contiune on this road, keep working at it ");
  }
}
//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)
// do something new, change the pattern
