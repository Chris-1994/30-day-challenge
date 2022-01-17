//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)
let day = "".toLowerCase();
document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value;

  if (day === "tuesday" || day === "thursday") {
    document.querySelector("#check").innerHTML = "YOU HAVE CLASS";
  } else if (day === "saturday" || day === "sunday") {
    document.querySelector("#check").innerText = "Its the weekend";
  } else if (day === "wednesday") {
    document.querySelector("#check").innerText = "humpday";
  } else {
    document.querySelector("#check").innerText = "BORING";
  }
}
