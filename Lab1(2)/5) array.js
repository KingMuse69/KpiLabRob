
let fruits = ["apple", "banana", "cherry"];

fruits.push("orange");

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

console.log("Total fruits:", fruits.length);
