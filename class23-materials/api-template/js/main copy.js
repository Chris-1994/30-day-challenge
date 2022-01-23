document.querySelector("button").addEventListener("click", anothaOne);
//localStorage.clear();
function anothaOne() {
  const choice = document.querySelector("input").value;
  fetch(`https://openlibrary.org/isbn/${choice}.json`)
    .then((res) => res.json())
    .then((data) => {
      if (!localStorage.getItem("books")) {
        localStorage.setItem("books", data.title);
      } else {
        let books = localStorage.getItem("books") + "," + data.title;
        localStorage.setItem("books", books);
      }
      document.querySelector("h2").innerText = localStorage.getItem("books");
    });
}

// get the book and store in local
