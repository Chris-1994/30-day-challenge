function reverseString(word) {
  return word.split("").reverse().join("");
}

console.log(reverseString("algorithms"));

// ES6 syntax support
function reverseStringEs6(text) {
  return [...text].reverse().join("");
}

function reverseStringLoop(text) {
  let result = text.split("");
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
}
text = "algorithms";
console.log(text.length - 1);

function reverseStringChar(text) {
  let result = "";
  for (let char of text) {
    result = char + result;
  }
}

function reverseStringRecur(text) {
  if (text === "") {
    return "";
  } else {
    console.log(text[0]);
    console.log(text.substr(1) + text[0]);
    console.log(text.substr(1) + text[1]);
    console.log(text.substr(1) + text[2]);
    console.log(text.substr(1) + text[3]);
    console.log(text.substr(1) + text[4]);
    console.log("Result");
    console.log(reverseString(text.substr(1) + text[0]));
    return reverseString(text.substr(1) + text[0]);
  }
}

reverseStringRecur("code");

function reverseStringRe(text) {
  return text.split("").reduce((acc, char) => {
    console.log(acc + char);
  });
  return text.split("").reduce((acc, char) => char + acc, "");
}

console.log(reverseStringRe("word"));

// fastest method
function reverseStringReE6(text) {
  return [...text].reduce((acc, char) => char + acc, "");
}
