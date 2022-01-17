// factory function

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

// Constructor function

function Circle(radius) {
  let color = "red";
  defaultLocation = { x: 0, y: 0 };
  computeOptiumLocation = function () {};

  this.radius = radius;
  this.draw = function () {
    computeOptiumLocation();
    console.log("draw");
  };
}
const c = new Circle(10);

const another = new Circle(1);

another.location = { x: 1 };
console.log(another);

let x = 1000;
let y = x;
x = 50;

console.log(x); // 50
console.log(y); // 1000

let ob = { value: 10 };
let oby = ob;

ob.value = 50;

console.log(ob); // { value: 50 }
console.log(oby); // { value: 50 }
