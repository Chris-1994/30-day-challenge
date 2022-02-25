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
//
//function removeSmallest(numbers) {
//  return numbers.sort().slice(1);
//}
//

//function removeSmallest(arr) {
//  var min = Math.min(...arr);
//  return arr.filter((e) => e != min);
//}
//
//console.log(removeSmallest([5, 3, 2, 1, 4]));
//ee = [1, 2, 3, 4, 5];
//console.log(Math.min(...ee));

function removeSmallest(numbers) {
  const smallets = Math.min.apply(null, numbers);
  const pos = numbers.indexOf(smallets);
}

function Star()