//Create a stopwatch object that has four properties and three methods

let stopWatch = {};

stopWatch.color = "red";
stopWatch.price = "1999";
stopWatch.size = "small";
stopWatch.country_of_origin = "Portugal";

stopWatch.TellCOO = function (coo) {
  console(`the coo it's ${coo}`);
};

stopWatch.Color = function (color) {
  color == "red" ? console.log("red") : false;
};

stopWatch.Size = function (size) {
  size === "small" ? console.log("small") : false;
};

stopWatch.Color(stopWatch.color);
