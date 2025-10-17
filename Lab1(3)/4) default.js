
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

let userInput;
let username = userInput || "Anonymous";

greet();
greet("Alex");

console.log("Username:", username);
