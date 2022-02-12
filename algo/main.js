const sumContiguousArray = function (ary) {
  const lastItem = ary[ary.length - 1];
  return (lastItem * (lastItem + 1)) / 2;
};

const nums = [1, 2, 3, 4, 5];
const sumOfArray = sumContiguousArray(nums);
console.log(sumOfArray);
