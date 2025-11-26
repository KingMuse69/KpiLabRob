// Білаш Олексій ІМ-52
// 7-break.js
console.log("--- 7. Оператор break ---");

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log(`Знайдено 5! Вихід з циклу за допомогою break.`);
        break; 
    }
    console.log(`Поточне i: ${i}`);
}