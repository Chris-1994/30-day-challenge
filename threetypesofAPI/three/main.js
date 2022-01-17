document.querySelector("button").addEventListener("click", run);

function run() {
  let url = `https://thatcopy.github.io/catAPI/imgs/jpg/2869233.jpg`;
  fetch(url).then((res) =>
    res.json().then((data) => {
      document.querySelector("img").src = data.webpurl;
      searchForFact(data.id);
    })
  );
}

function searchForFact(factNumber) {
  let url = `https://cat-fact.herokuapp.com/facts/${factNumber}`;
  fetch(url).then((res) =>
    res
      .json()
      .then((data) => {
        data.forEach((element, index) => {
          document.querySelector("h1").innerText = `\n${element.message}`;
        });
      })
      .catch((err) => {
        console.log(err);
      })
  );
}
