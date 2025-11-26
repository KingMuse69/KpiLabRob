//Білаш Олексій ІМ-52
// 7-compose-async.js
console.log("--- 7. Асинхронна композиція ---");


const delayMultiply = (x) => new Promise(res => {
    setTimeout(() => res(x * 2), 500);
});

const addTen = (x) => x + 10;

const composeAsync = (f, g) => async (x) => f(await g(x));

const processAsync = composeAsync(addTen, delayMultiply);

processAsync(5).then(result => {
    console.log(`Фінальний асинхронний результат: ${result}`);
});

console.log('...Зачекайте 0.5 секунди...');