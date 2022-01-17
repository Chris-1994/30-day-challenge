//Write your pseduo code first!
//cel = ((userInput * 9) / 5) * 32;
// get the temperature

document.querySelector("#celsius").addEventListener("click", click);
// Convert the temperatur from f to c
function click() {
  const userInput = document.querySelector("#userInput").value;
  if (parseInt(userInput) != NaN) {
    let temp = ((userInput * 9) / 5) * 32;
    alert(temp);
  } else {
    alert("Nothing to report");
  }
}

// return the C to the user
e;
