// Білаш Олексій ІМ-52
// 5-find.js
console.log("--- 5. Метод find() ---");

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Alice' }
];

const firstAlice = users.find(user => user.name === 'Alice');
console.log("Знайдено користувача (перший 'Alice'):", firstAlice); 

const notFound = users.find(user => user.name === 'Charlie');
console.log("Знайдено користувача ('Charlie'):", notFound);