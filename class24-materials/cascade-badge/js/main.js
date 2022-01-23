//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty.
// Please create a function that reverses your list and prints it to the console.
pokemon = ["bulbasur", "wedle", "thorn", "pig"];

function reverse(arr) {
  return arr.reverse();
}
console.log(reverse(pokemon));

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if
//  the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function square(a, b) {
  a.forEach((element, index) => {
    let list_len = a.length;
    let newList = [];
    let count = 0;
    let total_sum_of_list_b = b.reduce((sum, element) => sum + element, 0);
    let square_Num = Math.pow(element);
    if (square_Num > total_sum_of_list_b) {
      newList.push(count++);
    }
    if (newList.length == list_len.length) {
      console.log(true);
    } else {
      console.log(false);
    }
  });
}

function compareArr(a, b) {
  return (
    a.reduce((acc, c) => acc + c ** 2, 0) >
    b.reduce((acc, c) => acc + c ** 3, 0)
  );
}

console.log(compareArr([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function isMultipe(arr) {
  return arr.filter((e, i) => e % i === 0);
}

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

arr = [1, 2, 3, "5", "6"];

console.log(
  arr.reduce((element, index) => +Number(element) + +Number(index), 0)
);
