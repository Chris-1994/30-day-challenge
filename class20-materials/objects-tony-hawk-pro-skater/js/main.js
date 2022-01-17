//Create a Tony Hawk Pro Skater constructor that makes
// fighting game characters with 4 properties and 3 methods

function CreateCharacters(color, eyeColor, sex, race) {
  this.color = color;
  this.eyeColor = eyeColor;
  this.sex = sex;
  this.race = race;

  this.flip = function () {
    console.log("Flip");
  };

  this.handShake = function () {
    console.log("Handshake");
  };
  this.superPower = function () {
    console.log("Super Power");
  };
}

const tony = new CreateCharacters("Yellow", "Blue", "Man", "Chinese");

tony.superPower();

class MakeCar {
  constructor() {}
  honk() {}
}
