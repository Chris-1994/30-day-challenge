[1, 23, 4].reduce((element, index) => element * index, 0);

let sum = 0;
function call(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    product[arr] = product;
  }
}

console.log([1, 2, 3, 4].splice(0, 2, "hello", "dance"));
let date = ["1", "2", "3", "4"];

console.log(date.splice(2, 0, "hello", "dance"));

let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
console.log(arr.splice(2, 0, "complex", "language"));

console.log([1, 2, 3, 45].slice(1, 2));

lst = [12, 3, 4, 5, 6];

console.log(lst.sort((a, b) => a - b));
console.log(lst.filter((element, index) => element % 2 === 0));
console.log(lst.sort((a, b) => a - b));

console.log(
  lst.map((element, index) => {
    if (element % 2 === 0) {
      return element * 2;
    } else {
      return (element += " MAN ");
    }
  })
);

true ? console.log("true") : console.log("false");

let summm = 0;
while (summm < 1) {
  summm++;
  console.log(summm);
}

console.log([1, 2, 3, 4].reduce((element, current) => current * element, 1));

function multi(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }
  console.log(product);
}

multi([1, 2, 3]);
delete lst[1];
console.log(lst);

function MakeCar(color, size, cost) {
  this.make = color;
  this.size = size;
  this.cost = cost;
  this.lock = function lockDoor() {
    console.log("lock door");
  };
}

function Chris(name, color, eyeColor, noseSize) {
  this.eyeColor = eyeColor;
  this.name = name;
  this.noseSize = noseSize;
  this.color = color;
  this.run = function run() {
    console.log("run");
  };
}

function func(arr) {
  let sum = 12;
  for (let i = 0; i < arr.length; i++) {
    sum = sum * arr[i];
  }
}

delete arr[1];
