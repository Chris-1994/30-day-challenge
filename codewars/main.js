function friend(friends) {
  arr = [];
  friends.forEach((element, index) => {
    if (element.length === 4) {
      arr.push(element);
    }
  });
  return arr;
}

console.log(friend(["Sam", "Ryan"]));

function countSheeps(arrayOfSheep) {
  count = 0;
  arrayOfSheep.forEach((element, index) => {
    if (element === true) {
      count++;
    }
  });
  return count;
}

function addBinary(a, b) {
  return (a.toString(2) + b.toString(2)).toString();
}

console.log(addBinary(5, 9));

console.log((1).toString(2));

class SmallestIntegerFinder {
  findSmallestInt(args) {
    this.args = args;
    {
      args.sort((a, b) => a - b);
      return args[0];
    }
  }
}

function longest(s1, s2) {
  arr = [];
  splitted_a = s1.split();
  splitted_b = s2.split();
  splitted_a.forEach((element) => {
    if (arr.includes(element) === false) {
      arr.push(element);
    }
    splitted_b.forEach((element) => {
      if (arr.includes(element) === false) {
        arr.push(element);
      }
    });
  });
  console.log(arr);
}

a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";

//console.log(a.split("").sort());

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");
