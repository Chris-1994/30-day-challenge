true ? console.log("warm") : console.log("break");

function mult(mulit) {
  for (let i = 0; i < mulit.length; i++) {
    product = 1;
    product = product * mulit[i];
  }
}

function m(multi) {
  for (let i = 0; i < multi.length; i++) {
    product = 1;
    product = product * multi[i];
  }
}

function getCount(str) {
  var vowelsCount = 0;
  let splitted_str = str.split("");
  let vowelsList = ["a", "e", "i", "o", "u"];
  splitted_str.filter((element, index) => {
    if (
      element === "a" ||
      element === "e" ||
      element === "e" ||
      element === "o" ||
      element === "u"
    ) {
      vowelsCount++;
    }
  });

  // enter your majic here

  return vowelsCount;
}
console.log(getCount("abracadabra"));

function noSpace(x) {
  return x.split(/\s+/).join("");
}

console.log(
  noSpace(
    "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd"
  )
);

var isSquare = function (n) {
  if (n >= 0 && Math.sqrt(n) % 1 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isSquare(0));
