//Make a simple function called greet that returns the most-famous "hello world!".
greet = () => "hello world";

//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
function positiveSum(arr) {
  const reducer = (accumulator, current) =>
    accumulator + (current > 0 ? current : 0);
  return arr.reduce(reducer, 0);
}
