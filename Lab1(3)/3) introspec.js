

class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  start() {
    console.log(this.brand + " is starting...");
  }
}

let myCar = new Car("Toyota", 2020);
console.log(typeof myCar);
console.log(myCar instanceof Car);
console.log(Object.keys(myCar));
console.log(Object.getOwnPropertyNames(Car.prototype));

console.log(myCar.hasOwnProperty("brand"));
