//Write your pseduo code first!
// (0°C × 9/5) + 32 = 32°F

document.querySelector("#celsius").addEventListener("click", tempConverTerCtoF);

function tempConverTerCtoF() {
  const celsius = document.querySelector("#userInput").value;
  result = (celsius * 9) / 5 + 32;

  document.querySelector("#showResult").innerText = result;
}
