// Білаш Олексій ІМ-52
// 2-callback.js
console.log("--- 3. Колбек (з поверненням) ---");

function calculate(a, b, operation) {
    const result = operation(a, b); 
    console.log(`Результат операції: ${result}`);
    return result;
}

const subtract = (x, y) => x - y;

calculate(20, 5, subtract); // 20 - 5 = 15
calculate(5, 5, (x, y) => x * y); // 5 * 5 = 25