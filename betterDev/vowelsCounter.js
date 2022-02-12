vowelsCounter("anehizxcv");

const vowels = ["a", "e", "i", "o", "u"];

function vowelsCounterV1(text) {
  let counter = 0;
  for (let letter of text.toLower()) {
    if (vowels.includes(letter)) {
      counter++;
    }
  }
  return counter;
}

function vowelsCounterV2(text) {
  let matchingInstances = text.match(/|[aeiou]/gi);
  if (matchingInstances) {
    return matchingInstances.length;
  } else {
    return 0;
  }
}
