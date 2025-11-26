//Білаш Олексій ІМ-52
// 3-arguments.js
console.log("--- 3. Композиція з кількома аргументами ---");

const sum = (a, b) => a + b;
const square = (x) => x * x;

const compose2 = (f, g) => (a, b) => f(g(a, b));

const sumThenSquare = compose2(square, sum); 

const result = sumThenSquare(2, 3);
console.log(`Результат ((2 + 3) ^ 2): ${result}`);