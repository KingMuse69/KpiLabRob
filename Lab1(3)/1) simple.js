

// Variables
let name = "Alex";
let age = 20;

// Function
function greet(user) {
  console.log("Hello, " + user + "!");
}

// Object
let user = {
  name: "Alex",
  age: 20,
  city: "Kyiv"
};

// Array
let hobbies = ["coding", "music", "gaming"];

// Hash (Map)
let userHash = new Map();
userHash.set("email", "alex@example.com");
userHash.set("role", "student");

greet(user.name);
console.log("Age:", age);
console.log("City:", user.city);
console.log("Hobbies:", hobbies,join(", "));
console.log("User Role:", userHash.get("role"));
