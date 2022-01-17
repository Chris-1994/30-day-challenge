function highAndLow(numbers) {
  lst = [];
  let num = numbers.split(" ").sort();
  num.forEach((element, index) => {
    lst.push(Number(element));
  });
  sorted_list = lst.sort();
  console.log(sorted_list);
  return `${[sorted_list[0]]} ${[sorted_list[lst.length - 1]]}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
