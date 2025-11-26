//Білаш Олексій ІМ-52
// 6-functor.js
console.log("--- 6. Функтор ---");

class Box {
    constructor(value) {
        this.value = value;
    }
    
    map(f) {
        return new Box(f(this.value)); 
    }
}

const result = new Box(5)
    .map(x => x + 1)
    .map(x => x * 2);

console.log(`Функтор результат: ${result.value}`);