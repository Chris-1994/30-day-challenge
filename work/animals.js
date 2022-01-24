class Animal {
  constructor(name, breed) {
    this._name = name;
    this._breed = breed;
  }
  get name() {
    return this._name;
  }
  speak() {
    console.log(`${this.name} make a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log(`${this.name} barks`);
  }
}

const simba = new Dog("Simba", "Sheperd");
simba.speak();

class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }

  speak() {
    super.speak();

    console.log(`${this.name} meows`);
  }
}
