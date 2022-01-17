//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawk(down, left, right, up) {
  this.down = down;
  this.up = up;
  this.left = left;
  this.right = right;

  this.spin = function () {
    return console.log("Do backflip 360x up down");
  };
  this.backflip = function () {
    console.log("Do backflip");
  };

  this.roundHouseKick = function () {
    console.log("Round house kick a house");
  };
}

const call = new TonyHawk(30, 40, 50, 60);

call.backflip();
