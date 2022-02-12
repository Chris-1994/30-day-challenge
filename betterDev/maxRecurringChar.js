maxRecurringChar("aabacada");

//let charMap = {};
//for (let char of text){
//    if (charMap.hasOwnProperty(char)){charMap[char]++}else{ charMap(char) =1}
//}
//

function maxRecurringChar(text) {
  let charMap = {};
  let maxCharValue = 0;
  let maxChar = "";

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > maxCharValue) {
      maxCharValue = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
//console.log(maxRecurringChar("abbbbbccccc"));

function maxRecurringChar(text) {
  let charMap = {};
  let charArray = [];
  let valuesArray = [];
  let maxCharValue = 0;

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  charArray = Object.keys(charMap);
  valuesArray = Object.values(charMap);
  maxCharValue = Math.max(...valuesArray);

  return charArray(valueArray.indexOf(maxCharValue));
}
