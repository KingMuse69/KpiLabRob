//Білаш Олексій ІМ-52
// 7-functor-short.js
console.log("--- 7. Скорочений функтор ---");

const Box = value => ({
    map: f => Box(f(value)),
    value
});

const result = Box(10)
    .map(x => x - 5)
    .map(x => `Значення: ${x}`);

console.log(`Скорочений функтор результат: ${result.value}`);