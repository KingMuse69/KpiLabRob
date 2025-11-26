//Білаш Олексій ІМ-52
// 6-recursive.js
console.log("--- 6. Рекурсія ---");

function factorial(n) {

    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1); 
}


const result = factorial(5);
console.log(`Факторіал 5: ${result}`);