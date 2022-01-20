document.querySelector("button").addEventListener("click", anothaOne);

function anothaOne() {
  const choice = document.querySelector("input").value;
  fetch(`https://openlibrary.org/isbn/${choice}.json`)
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("Book2", data.title);
    });
}

// get the book and store in local
