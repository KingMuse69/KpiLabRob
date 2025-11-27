// Білаш Олексій ІМ-52
// 6-flat.js
console.log("--- 6. Метод flat() ---");

const deepArray = [1, [2, 3], [4, [5, 6]]];

const flatOnce = deepArray.flat();
console.log(`Глибина 1: ${flatOnce}`); // [1, 2, 3, 4, [5, 6]]

const flatAll = deepArray.flat(Infinity);
console.log(`Глибина Infinity: ${flatAll}`); // [1, 2, 3, 4, 5, 6]