let day = "".toLowerCase();
day = document.querySelector("#day").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value;
  if (day == "Sunday" || day == "Saturday") {
    document.querySelector("#placeToSee").innerText = "THE WEEKEND";
  } else if (day == "Thursday" || day === "Tuesday") {
    document.querySelector("#placeToSee").innerText = "School day";
  } else {
    document.querySelector("#placeToSee").innerText = "Boring day";
  }
}
