// Білаш Олексій ІМ-52
// 5-cache.js
console.log("--- 6. Кешування (Мемоізація) ---");

function createMemoizedAdder() {
    const cache = {};
    
    return function(a, b) {
        const key = `${a}_${b}`;
        if (cache[key]) {
            console.log(`(З кешу) ${key}`);
            return cache[key];
        }
        
        console.log(`(Обчислення) ${key}`);
        const result = a + b;
        cache[key] = result;
        return result;
    };
}

const memoizedAdd = createMemoizedAdder();
memoizedAdd(1, 2);
memoizedAdd(5, 5);
memoizedAdd(1, 2);