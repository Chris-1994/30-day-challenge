arr = [1, 2, 3, 4, 5, 6];
let dict = [{ name: "sam" }];
arr.reduce((sum, current) => sum + current, 0);

dict.map((ele) => {
  console.log(ele.name);
});

arr.filter((ele) => {
  if (ele == 1) {
    console.log("dad");
  }
});

const data = ["sam", "sam", ""];

const tra = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(tra);

let count = 0;
while (count < 5) {
  count++;
}

console.log(arr.reduce((x, current) => x + current, 0));
arr.filter((x, i) => {
  if (x.name == "sam") {
    return x.name;
  }
});

arr.forEach((x, i) => {});

const pop = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(pop);

console.log(arr);

arr.forEach((x, index) => {});
arr.map((x, index) => {
  x.name;
});

arr.reduce((x, i) => {
  x + i;
  0;
});

"sam" == "sadm" ? console.log("arr") : console.log("lol");
1 === 2 ? 1 : 2;

let p = Object();

arr[4] = "p";

let nNEWEW = {}; //
let NEWEwew = Object();

arr.reduce((element, index) => element + index, 0);
arr.forEach((element, index) => console.log(element));

arr.map((element, index) => {
  console.log(element.name, index);
});

true === true ? console.log("madman") : console.log("crazy man");

let neffw = {};
let nedw = Object();
let literla = Object();

function Mult(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }
}

function multiarr(arr) {
  let pro = 1;
  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }
}

for (key in Object()) {
  key.name;
}

function mmult(arr) {
  let dod = 1;
  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }
}

function aaa(arr) {
  let produc = 1;
  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }
}

let List = [1, 2, 4];
List[1] = "bob";
delete List[1];
console.log(List);

for (let key in {}) {
  key.name;
}

const newMan = ["car"];

const result = newMan.reduce((element, index) => {
  if (!element[index]) {
    element[index] = 0;
  }
  element[index]++;
  return element;
}, {});

console.log(result);
