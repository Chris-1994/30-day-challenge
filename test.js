function reverseWord(text) {
  return [...text].reduce((acc, char) => char + acc, "");
}

function rev(word) {
  return [...word].reduce((acc, char) => char + acc, "");
}

function runPrint() {
  console.log("print");
}

function booleanToString(b) {
  return b ? "true" : "false";
}

booleanToString(false);

function removeSmallest(numbers) {
  return numbers.sort().slice(1);
}

removeSmallest([3, 1, 5, 6, 7, 2]);
