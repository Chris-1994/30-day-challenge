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
1;
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

class Mew {
  constructor(name, tail) {
    this.tail = tail;
    this.name = name;
  }
}

class MewTwo extends Mew {
  constructor(name, tail) {
    super(name, tail);
  }
  call() {
    console.log(`${this.tail} meows`);
  }
}

const mew = new MewTwo("black", "white");
mew.call();

class Tom {
  constructor(man, female) {
    this.man = man;
    this.female = female;
  }
}

class Girl extends Tom {
  constructor(man, female) {
    super(man, female);
  }
}
