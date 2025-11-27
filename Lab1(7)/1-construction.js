// Білаш Олексій ІМ-52
// 1-construction.js
console.log("--- 1. Створення масиву ---");

const arrLiteral = [1, 2, 3];
console.log(`Літерал: ${arrLiteral}`);

const arrConstructor = new Array('a', 'b', 'c');
console.log(`Конструктор: ${arrConstructor}`);

const emptyArr = new Array(5).fill(0);
console.log(`Масив довжиною 5: ${emptyArr}`);