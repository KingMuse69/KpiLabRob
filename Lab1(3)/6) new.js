

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  speak() {
    console.log(this.name + " is a " + this.type + " and makes a sound!");
  }
}

let dog = new Animal("Buddy", "dog");
let cat = new Animal("Misty", "cat");

dog.speak();
cat.speak();
