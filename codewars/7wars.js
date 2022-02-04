function squareSum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr * curr, 0);
}

console.log(squareSum([1, 2, 2]));
