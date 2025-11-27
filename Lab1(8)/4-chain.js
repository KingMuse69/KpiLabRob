// Білаш Олексій ІМ-52
// 4-chain.js
console.log("--- 5. Ланцюгові виклики ---");

const Builder = {
    value: "",
    addText(text) {
        this.value += text;
        return this;
    },
    wrap(start, end) {
        this.value = start + this.value + end;
        return this;
    }
};

const finalResult = Builder
    .addText("Hello")
    .addText(" World")
    .wrap("[", "]")
    .value;

console.log(`Результат: ${finalResult}`); // [Hello World]