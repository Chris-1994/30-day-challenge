function m(arr) {
  product = 1;
  for (let i = 0; i < arr.length; i++) {
    console.log(product, arr[i]);
    product = product * arr[i];
  }
  console.log(product);
}

console.log(m([1, 2, 3, 4]));
