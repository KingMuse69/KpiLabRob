//Білаш Олексій ІМ-52
// 4-multiple.js
console.log("--- 4. Композиція з багатьох функцій ---");

const trim = (str) => str.trim(); 
const toLower = (str) => str.toLowerCase(); 
const wrap = (str) => `---${str}---`;

const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const processText = compose(wrap, toLower, trim);

const result = processText('  HELLO WORLD  ');

console.log(`Результат: ${result}`);