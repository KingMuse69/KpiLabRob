// Білаш Олексій ІМ-52
// 8-indexOf.js
console.log("--- 8. Метод indexOf() ---");

const letters = ['A', 'B', 'C', 'B', 'D'];

const firstB = letters.indexOf('B');
console.log(`Індекс першого 'B': ${firstB}`); // 1

const indexZ = letters.indexOf('Z');
console.log(`Індекс 'Z': ${indexZ}`); // -1

const secondB = letters.indexOf('B', 2);
console.log(`Індекс 'B' (починаючи з 2): ${secondB}`); // 3