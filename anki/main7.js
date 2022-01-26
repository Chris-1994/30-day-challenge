class Contractor {
  constructor(name, role) {
    this._name = name;
    this._role = role;
  }
  get name() {
    return this._name;
  }
  get role() {
    return this._role;
  }

  sayHello() {
    console.log(
      `Hello, I'm on the ${this._role} team at ${this._name} #100Devs!`
    );
  }
}

class Front extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }

  sayHello() {
    console.log(
      `Hello, I'm on the ${this._role} team at #100Devs and I use ${this._tech}`
    );
  }
}

class Back extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }

  sayHello() {
    console.log(
      `Hello, I'm on the ${this._role} team at #100Devs and I use ${this._tech}`
    );
  }
}

let bob = new Contractor("Bob", "Front-end");
let simba = new Front("Bob", "Front-end", "React");
let machi = new Front("Bob", "Back-end", "Node");

let agency = [bob, simba, machi];
for (person of agency) {
  person.sayHello();
}
