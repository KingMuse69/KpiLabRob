//Білаш Олексій ІМ-52
// 8-adder.js
console.log("--- 8. Простий додавач ---");

function createAdder(base) {

    return function(num) {
        return base + num;
    };
}

const addFive = createAdder(5);
const addTen = createAdder(10);

console.log(`5 + 3 = ${addFive(3)}`);
console.log(`10 + 3 = ${addTen(3)}`);