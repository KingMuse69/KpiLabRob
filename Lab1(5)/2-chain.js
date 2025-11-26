//Білаш Олексій ІМ-52
// 2-chain.js
console.log("--- 2. Ланцюгові виклики ---");

const Calculator = {
    value: 0,
    add(n) {
        this.value += n;
        return this;
    },
    multiply(n) {
        this.value *= n;
        return this;
    }
};


const result = Calculator.add(5).multiply(2).value;
console.log(`Результат (0 + 5) * 2: ${result}`);