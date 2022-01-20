//get the deck
// save the deck id in the browser, homework
let deckId = "";

fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    deckId = data.deck_id;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/?deck_count=2`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      let val1 = Number(data.cards[0].value);
      let val2 = Number(data.cards[1].value);
      document.querySelector("#player1").src = data.cards[0].image;
      document.querySelector("#player2").src = data.cards[1].image;
      if (val1 > val2) {
        document.querySelector("h3").innerText = "Player 1 WON";
      } else if (val1 < val2) {
        document.querySelector("h3").innerText = "Player 2 Won";
      } else {
        document.querySelector("h3").innerText = "War";
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
function cardValue(val) {
  if (val === "ACE") {
    return 14;
  } else if (val === "KING") {
    return 13;
  } else if (val === "QUEEN") {
    return 12;
  } else if (val === "Jack") {
    return 11;
  } else {
    return val;
  }
}
