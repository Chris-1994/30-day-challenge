function openOrSenior(data) {
  arr = [];
  data.map((element) => {
    console.log(element[0]);
    if (element[0] >= 55 && element[1] > 7) {
      arr.push("Senior");
    } else {
      arr.push("Open");
    }
  });
  return arr;
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
// [ 'Open', 'Senior', 'Open', 'Senior' ]

function openOrSenior(data) {
  data.map(([age, handicap]) => (age > 54 && handicap > 7 ? "Senior" : "Open"));
}

function person(num) {
  var time = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num.split(" ").map(number).reduce;
  }
}
