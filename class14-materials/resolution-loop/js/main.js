//Create a function that has a loop that prints your resolution 365 times to the console and then call that function
document.querySelector("h1").addEventListener("click", logMyResolution);

function logMyResolution(input) {
  let res = document.querySelector("#resolution").value;
  for (let i = 1; i <= 365; i++) {
    document.querySelector("#letsGo").innerText += ` ${res} `;
  }
}

logMyResolution("I OWN");
//Bonus can you make it print your resolution 365 times to the DOM?
