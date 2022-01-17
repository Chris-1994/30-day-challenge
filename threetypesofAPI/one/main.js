document.querySelector("button").addEventListener("click", searchForFact);

function searchForFact() {
  let url = "https://cat-fact.herokuapp.com/facts";
  fetch(url).then((res) =>
    res
      .json()
      .then((data) => {
        data.forEach((element, index) => {
          document.querySelector("p").innerText += `\n${element.text}`;
        });
      })
      .catch((err) => {
        console.log(err);
      })
  );
}
