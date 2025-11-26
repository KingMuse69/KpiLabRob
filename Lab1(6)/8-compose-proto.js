//Білаш Олексій ІМ-52
// 8-compose-proto.js
console.log("--- 8. Композиція через прототип ---");

Function.prototype.compose = function(g) {
    const f = this;
    return (...args) => f(g(...args));
};

const cube = (x) => x * x * x;
const minusOne = (x) => x - 1;

const composedFunc = cube.compose(minusOne); 

const result = composedFunc(5);
console.log(`Результат ((5 - 1) ^ 3): ${result}`);