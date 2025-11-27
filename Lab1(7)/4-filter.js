// Білаш Олексій ІМ-52
// 4-filter.js
console.log("--- 4. Метод filter() ---");

const numbers = [1, 20, 15, 3, 50, 6];

const bigNumbers = numbers.filter(num => num > 10);

console.log(`Оригінальний масив: ${numbers}`);
console.log(`Відфільтрований масив (більше 10): ${bigNumbers}`);