//Білаш Олексій ІМ-52
// 5-logger.js
console.log("--- 5. Логер на замиканні ---");

function createLogger(prefix) {
    return function(message) {
        const timestamp = new Date().toLocaleTimeString();
        console.log(`[${timestamp}] [${prefix}] ${message}`);
    };
}

const logInfo = createLogger("INFO");
const logError = createLogger("ERROR");

logInfo("Користувач успішно увійшов.");
logError("Помилка підключення до бази даних!");