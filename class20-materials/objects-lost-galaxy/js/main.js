//Create a dog object that has four properties and three methods
let dog = {};

dog.hair = "yellow";
dog.eyeColor = "Blue";
dog.legs = "Three";
dog.tail = "Long";

dog.run = function () {
  return console.log("Run");
};
dog.changeEyeColor = function () {
  return (dog.eyeColor = "Red");
};

dog.giveLeg = function () {
  return (dog.legs = "Four Legs");
};

console.log(dog.giveLeg());

function MakeCar(carMake, carModel, carColor, numOfDoors) {
  this.make = carMake;
  this.carModel = carModel;
  this.carColor = carColor;
  this.numOfDoors = numOfDoors;

  this.lockDoor = function () {
    alert("lock door");
  };
}
