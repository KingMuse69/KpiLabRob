// Білаш Олексій ІМ-52
// 3-every.js
console.log("--- 3. Метод every() ---");

const ages = [12, 18, 25, 40];

const allAdults = ages.every(age => age >= 18);
console.log(`Чи всі елементи >= 18? ${allAdults}`); // false

const adults = [20, 35, 60];
const allAreAdults = adults.every(age => age >= 18);
console.log(`Чи всі елементи >= 18? ${allAreAdults}`); // true