document.querySelector(".multiply").addEventListener("click", calculate);
document.querySelector(".subtract").addEventListener("click", calculate);
document.querySelector(".addition").addEventListener("click", calculate);
document.querySelector(".division").addEventListener("click", calculate);

function calculate() {
  const n1 = document.querySelector("#n1").value;
  const n2 = document.querySelector("#n2").value;
  const multiply = document.querySelector(".multiply").value;

  const subtract = document.querySelector(".subtract").value;
  const addition = document.querySelector(".addition").value;
  const division = document.querySelector(".division").value;
  if (multiply == "multiply") {
    alert(n1 * n2);
  } else if (subtract == "subtract") {
    alert(n2 - n2);
  } else if (addition == "addition") {
    n1 + n2;
  } else if (division == "division") {
    alert(n1 / n2);
  }
}
