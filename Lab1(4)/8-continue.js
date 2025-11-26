// Білаш Олексій ІМ-52
// 8-continue.js
console.log("--- 8. Оператор continue ---");

for (let i = 0; i < 10; i++) {

    if (i % 2 === 0) {
        console.log(`Число ${i} парне. Пропускаємо.`);
        continue;
    }
    console.log(`Число ${i} непарне.`);
}