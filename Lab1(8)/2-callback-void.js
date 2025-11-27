// Білаш Олексій ІМ-52
// 2-callback-void.js
console.log("--- 2. Колбек (void) ---");

function processData(data, callback) {
    console.log(`Оброблено дані: ${data}`);
    callback(data); 
}

const logAction = (data) => {
    console.log(`[LOG] Дія виконана з даними: ${data}`);
};

processData("Користувач 123", logAction);