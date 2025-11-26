//Білаш Олексій ІМ-52
// 4-closure-recursive.js
console.log("--- 4. Рекурсивне замикання ---");

function add(a) {
    return function(b) {
        if (b) {
            return add(a + b);
        }
        return a;
    };
}

const sum = add(1)(2)(3)(4)();
console.log(`Сума 1 + 2 + 3 + 4: ${sum}`);