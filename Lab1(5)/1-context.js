//Білаш Олексій ІМ-52
// 1-context.js
console.log("--- 1. Контекст this ---");

console.log(`Глобальний this: ${JSON.stringify(this)}`); 

const user = {
    name: "John",
    greet: function() {
        console.log(`Привіт, я ${this.name}`);
    }
};

user.greet();