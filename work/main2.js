class Animal {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  speak() {
    console.log(`${this._name} makes a sound`);
  }
}

let simba = new Animal("Simba");

simba.name = "sam";
console.log(simba.name);
