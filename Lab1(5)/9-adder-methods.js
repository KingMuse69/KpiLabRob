//Білаш Олексій ІМ-52
// 9-adder-methods.js
console.log("--- 9. Додавач з методами ---");

function createCalculator(initialValue = 0) {
    let value = initialValue;
    
    return {
        add: (num) => {
            value += num;
        },
        subtract: (num) => {
            value -= num;
        },
        getValue: () => value
    };
}

const calc = createCalculator(20);
calc.add(5);
calc.subtract(10);

console.log(`Фінальне значення (20 + 5 - 10): ${calc.getValue()}`);