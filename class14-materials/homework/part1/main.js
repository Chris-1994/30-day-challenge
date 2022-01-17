let button = document
  .querySelector("button")
  .addEventListener("click", getHoroscopeFromBirthday);

function getHoroscopeFromBirthday() {
  const userInput = document.querySelector("input").value.toLowerCase();
  console.log(userInput);
  if (userInput == "march") {
    alert("Aries");
  } else if (userInput == "april") {
    alert("Taurus");
  } else if (userInput == "may") {
    alert("Gemini");
  } else if (userInput == "june") {
    alert("Cancer");
  } else if (userInput == "july") {
    alert("Leo");
  } else if (userInput == "august") {
    alert("Virgo");
  } else if (userInput == "september") {
    alert("libra");
  } else if (userInput == "october") {
    alert("scorpio");
  } else if (userInput == "november") {
    alert("Sagittarius");
  } else if (userInput == "december") {
    alert("Capricorn");
  } else if (userInput == "january") {
    alert("Aquarius");
  } else if (userInput == "february") {
    alert("Pisces");
  }
}
