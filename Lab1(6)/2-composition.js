//Білаш Олексій ІМ-52
// 2-composition.js
console.log("--- 2. Композиція функцій ---");

const multiplyByTwo = (x) => x * 2;
const addOne = (x) => x + 1;

const compose = (f, g) => (x) => f(g(x));

const multiplyThenAdd = compose(addOne, multiplyByTwo); 

const result = multiplyThenAdd(5);
console.log(`Результат (5 * 2 + 1): ${result}`);