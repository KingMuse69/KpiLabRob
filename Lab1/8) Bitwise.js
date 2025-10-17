
let big1 = 123456789012345678901234567890n;
let big2 = BigInt("999999999999999999999999999999");


let regular = 123456789012345678901234567890; 

let sum = big1 + big2;
let diff = big2 - big1;

console.log("BigInt sum:", sum);
console.log("BigInt difference:", diff);
console.log("Regular number:", regular);
