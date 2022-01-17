let user = {};

user["name"] = "john";
user.surname = "smith";
user["name"] = "pete";
delete user["name"];
console.log(user);

let isEMpty = {};

function checkIfKey(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

var isMorning = true;
var isDayTime = false;
var isEvening = false;

function greetFriend() {
  if (isMorning) {
    return `Good morning, friend!`;
  } else if (isDayTime) {
    return `Good afternoon, friend!`;
  } else if (isEvening) {
    return `Good night, friend!`;
  } else {
    return `Hi friend!`;
  }
}

console.log(greetFriend());

console.log("" == 0);

arr.reduce((element, index) => {
  if (!element[index]) {
    element[index] = 0;
  }
  element[index]++;
  return element;
}, {});

arr.map((element, index) => {
  element.name;
});

arr.shift();
arr.pop();

let newARRRR = Object();
let newA2RRRR = {};
let newwwww = [];
let newwww = Array();
arr.push();
arr.push();
