// Білаш Олексій ІМ-52
// 7-includes.js
console.log("--- 7. Метод includes() ---");

const pets = ['собака', 'кіт', 'рибка'];

const hasCat = pets.includes('кіт');
console.log(`Чи є 'кіт'? ${hasCat}`); // true

const hasParrot = pets.includes('папуга');
console.log(`Чи є 'папуга'? ${hasParrot}`); // false

const searchFromIndex2 = pets.includes('собака', 2);
console.log(`Чи є 'собака' з індексу 2? ${searchFromIndex2}`); // false