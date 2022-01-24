//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class Espresso {
  constructor(color, strength, sugar, sugarFree) {
    this.color = color;
    this.strength = strength;
    this.sugar = sugar;
    this.sugarFree = sugarFree;
  }

  coffeStrenght(yourStrenght) {
    //

    return this.strength * yourStrenght;
  }
  addSugar() {
    return `We added ${this.sugar} to your ${this.color}`;
  }

  removeSugar() {
    return `We removed ${this.sugarFree} from your ${this.color} coffee`;
  }
}

const coffee = new Espresso("black", 2, "sugar", "yes");

console.log(coffee.coffeStrenght(5));
console.log(coffee.removeSugar());

class EspressoMachine {
  constructor(color, make, model, price) {
    this.color = color;
    this.model = model;
    this.price = price;
    this.make = make;
  }
  start() {
    console.log("Starting to make espresso");
  }

  stop() {
    console.log("Turning off");
  }
  steam() {
    console.log("Building steam");
  }
}

let gaggia = new EspressoMachine("Black", "Gaggia", "Classic Pro", 1000);

gaggia.start();
