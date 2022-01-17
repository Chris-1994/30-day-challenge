// create a variable for each girl
const andi = document.querySelector("#andi");

const claire = document.querySelector("#claire");
const sharleen = document.querySelector("#sharleen");

// create a function that will return a event listener
document.querySelector("#andiNext").addEventListener("click", andiNext);
document.querySelector("#claireNext").addEventListener("click", claireNext);
document.querySelector("#sharleenNext").addEventListener("click", sharleenNext);
// create a next function for hidden and toggle

function andiNext() {
  sharleen.classList.add("hidden");
  claire.classList.add("hidden");
  andi.classList.toggle("hidden");
}

function claireNext() {
  andi.classList.add("hidden");
  sharleen.classList.add("hidden");
  claire.classList.toggle("hidden");
}

function sharleenNext() {
  andi.classList.add("hidden");
  claire.classList.add("hidden");
  sharleen.classList.toggle("hidden");
}
