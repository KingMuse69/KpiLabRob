// Білаш Олексій ІМ-52
// 4-for-in-obj.js
console.log("--- 4. Цикл for...in для об'єкта ---");

const user = {
    name: "Олег",
    age: 30,
    city: "Київ"
};

for (const key in user) {

    console.log(`Ключ: ${key}, Значення: ${user[key]}`);
}