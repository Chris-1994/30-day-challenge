function openOrSenior(data) {
  arr = [];
  data.map((element) => {
    console.log(element[0]);
    if (element[0] >= 55 && element[1] > 7) {
      arr.push("Senior");
    } else {
      arr.push("Open");
    }
  });
  return arr;
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
// [ 'Open', 'Senior', 'Open', 'Senior' ]

function openOrSenior(data) {
  data.map(([age, handicap]) => (age > 54 && handicap > 7 ? "Senior" : "Open"));
}

function person(num) {
  var time = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num.split(" ").map(number).reduce;
  }
}

const anObject = {
  myProp: 2,
};

// Create anotherObject using anObject as a prototype
const anotherObject = Object.create(anObject);
//const anotherObject = new anObject();

console.log(anotherObject.myProp); // 2

//Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

class Dog {
  constructor(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size;
  }
  bark() {
    if (this.size >= 60) {
      return "Bark! Bark!";
    } else {
      return "Woof! Woof!";
    }
  }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.

class Bank {
  constructor(name, balance, credit) {
    this.name = name;
    this.balance = balance;
    this.credit = credit;
  }
  describe() {
    return `owner: ${this.name}, balance: ${this.balance}`;
  }
}

const sam = new Bank("Brad", 1000, 5000);

console.log(sam.describe());
