// Білаш Олексій ІМ-52
// 3-closure.js
console.log("--- 4. Замикання (Closure) ---");

function createRevealer() {
    const secretMessage = "Це приватна інформація.";
    
    return function() {
        console.log(`Повідомлення: ${secretMessage}`);
    };
}

const reveal = createRevealer();
reveal();