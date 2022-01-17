//Create a function that takes in an array of numbers.
// Multiply each number together and alert the product.

arr = [2, 2];
const multi = arr.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item] * item;
  return obj;
}, {});

function multiNumBy(arr) {
  arr.forEach(function (item) {
    let product = item * item;
    console.log(product);
  });
}

function multiArrayBy(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }
  console.log(product);
}

function multiArrry(arr) {
  let product = 1;
  arr.forEach((item, index) => {
    product *= item;
  });
}

multiArrayBy([1, 2, 3, 4, 5]);
console.log("whitespace");
