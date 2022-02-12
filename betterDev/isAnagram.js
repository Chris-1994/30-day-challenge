function isAnagram(stringA, stringB) {
  const sanitizeString = function (str) {
    return str
      .toLowerCase()
      .replace(/[a-zd]/g, "")
      .split()
      .sort()
      .join("");
  };
  return sanitizeString(stringA) == sanitizeString(stringB);
}
console.log(isAnagram("silent", "listen"));

function createCharMap(text) {
  let charMap = {};
  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
    return charMap;
  }
  if (stringA.length === stringB.length) {
    let stringAMap = createdCharMap(stringA);
    let stringBMap = createdCharMap(stringB);
    for (let char in stringAMap) {
      if (stringAMap[char] !== stringBMap[char]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
