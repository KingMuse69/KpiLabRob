// Білаш Олексій ІМ-52
// 2-concat.js
console.log("--- 2. Метод concat() ---");

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5];

const merged = arr1.concat(arr2, arr3);

console.log(`Оригінальний arr1: ${arr1}`); // [1, 2]
console.log(`Об'єднаний масив: ${merged}`); // [1, 2, 3, 4, 5]

const spreadMerged = [...arr1, ...arr2, ...arr3];
console.log(`Через спред: ${spreadMerged}`);