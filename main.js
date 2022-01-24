class Animals {
  constructor(name) {
    this.name = name;
  }
  yell() {
    console.log(`yello ${this.name}`);
  }
}

class Dog extends Animals {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const ani = new Dog("call", "Simba");

class Soda extends Dog {
  constructor(softness) {
    this.softness = softness;
  }

  softnessLevel() {
    console.log(`Raise your softness level to 9999 ${this.softness} `);
  }
}

class Pepsi extends Soda {
  constructor(softness) {
    super(softness);
  }

  mySoftSoda() {
    console.log(`One soft ${this.softness}`);
  }
}

const softy = new Pepsi("ten");

softy.softnessLevel();
