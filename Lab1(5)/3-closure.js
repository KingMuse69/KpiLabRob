//Білаш Олексій ІМ-52
// 3-closure.js
console.log("--- 3. Замикання (Closure) ---");

function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(`Лічильник: ${count}`);
    };
}

const counterA = createCounter();
counterA();
counterA();