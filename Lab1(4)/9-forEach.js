// Білаш Олексій ІМ-52
// 9-forEach.js
console.log("--- 9. Метод forEach ---");

const numbers = [10, 20, 30, 40];

numbers.forEach(function(number, index, array) {

    const doubled = number * 2;
    console.log(`Елемент [${index}] (${number}) подвоєний: ${doubled}`);
});

console.log("\n--- Стрілкова функція ---");
numbers.forEach(num => console.log(`Значення: ${num}`));