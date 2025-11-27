// Білаш Олексій ІМ-52
// 6-wrapper.js
console.log("--- 7. Обгортка (Wrapper) ---");

function logWrapper(f) {
    return function(...args) {
        console.log(`Початок виклику: ${f.name} з аргументами: ${args}`);
        const result = f(...args);
        console.log(`Кінець виклику: ${f.name}, результат: ${result}`);
        return result;
    };
}

const power = (a, b) => a ** b;

const loggedPower = logWrapper(power);

loggedPower(2, 3);