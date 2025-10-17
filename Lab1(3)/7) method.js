

let person = {
  name: "Alex",
  sayHello() {
    console.log("Hello, my name is " + this.name);
  }
};

person.sayHello();
