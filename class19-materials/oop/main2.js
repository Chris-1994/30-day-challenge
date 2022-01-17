function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid default location");
      }
    },
  });
}
const c = new Circle(10);
console.log(c.defaultLocation); // { x: 0, y: 0 }

function StopwatchV() {
  let startTime,
    endTime,
    running,
    duration = 0;
  this.start = function () {
    if (running) throw new Error("Stopwatch has already started!");
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started!");
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = Stopwatch();
sw.startTime;
