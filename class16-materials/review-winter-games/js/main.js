//Create a function that takes in an array of numbers.
// Return a new array containing every even number from the original array (do not use map or filter)

function getEvenNumbers(array) {
  let newList = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newList.push(array[i]);
    }
  }
  return newList;
}

console.log(getEvenNumbers([2, 4, 7]));
// method number 2

function getEvenNumberV2(array) {
  const result = array.map((x) => x % 2 === 0);
  console.log(result);
}

console.log(getEvenNumberV2([2, 4, 7]));

function newArrEven(arr) {
  // what is this called?
  let newArr = [];
  arr.forEach((item, index) => {
    if (item % 2 === 0) {
      newArr.push(item);
    }
  });
  return newArr;
}

console.log(newArrEven([1, 2, 3, 4, 5]));
