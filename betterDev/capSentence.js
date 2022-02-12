capSentence("the tales of arise!");

function capSentence(text) {
  let wordsArray = text.toLowerCase().split(" ");
  let capsArray = [];
  wordsArray.forEach((word) => {
    capsArray.push(word[0].toUpperCase() + word.slice(1));
  });
  return capsArray.join(" ");
}

console.log(capSentence("the tale of arise!"));

function capSentence(text) {
  let wordsArray = text.toLowerCase().split(" ");
  let capsArray = wordsArray.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return capsArray.join(" ");
}

function capSentence(text) {
  let wordsArray = text.toLowerCase().split(" ");
  let capsArray = wordsArray.map((word) => {
    return word.replace(word[0], word[0].toUpperCase());
  });
  return capsArray.join(" ");
}
