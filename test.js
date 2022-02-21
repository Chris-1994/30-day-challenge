function reverseWord(text) {
  return [...text].reduce((acc, char) => char + acc, "");
}

function rev(word) {
  return [...word].reduce((acc, char) => char + acc, "");
}

function runPrint() {
  console.log("print");
}
