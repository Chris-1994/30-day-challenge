const contenst = document.querySelectorAll(".contestant");

Array.from(contenst).forEach((element) =>
  element.addEventListener("click", checkRose)
);

function checkRose(click) {
  if (click.target.classList.contains("rose")) {
    document.querySelector("#nikki").classList.toggle("hidden");
  } else {
    alert("Wrong!");
  }
}
