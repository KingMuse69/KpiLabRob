//Білаш Олексій ІМ-52
// 5-loop.js
console.log("--- 5. Композиція в циклі ---");

const funcs = [
    (x) => x + 1, // +1
    (x) => x * 2, // *2
    (x) => x - 3  // -3
];

let result = 10;
console.log(`Початкове значення: ${result}`);

for (const func of funcs) {
    result = func(result);
    console.log(`Проміжний результат: ${result}`);
}

console.log(`Фінальний результат: ${result}`);