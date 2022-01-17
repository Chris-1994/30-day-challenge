//Get a dog photo from the dog.ceo api and place the photo in the DOM
//let dogPicture = fetch("https://dog.ceo/api/breeds/image/random")
//  .then((res) => res.json())
//  .then((data) => console.log(data));

//fetch("https://dog.ceo/api/breeds/image/random").then((data) => {
//  return data.json();
//});

document.querySelector("button").addEventListener("click", getDrink);

function getDrink() {
  fetch("https://dog.ceo/api/breeds/image/random").then((res) =>
    res
      .json()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  );
}
