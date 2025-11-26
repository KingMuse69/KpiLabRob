// Білаш Олексій ІМ-52
// 5-for-in-array.js
console.log("--- 5. Цикл for...in для масиву ---");

const fruits = ["яблуко", "банан", "апельсин"];

for (const index in fruits) {

    console.log(`Індекс: ${index}, Значення: ${fruits[index]}`);
}