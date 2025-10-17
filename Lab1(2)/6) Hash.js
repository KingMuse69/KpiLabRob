

let userHash = new Map();

userHash.set("name", "Alex");
userHash.set("age", 20);
userHash.set("city", "Kyiv");

console.log("Name:", userHash.get("name"));
console.log("Age:", userHash.get("age"));
console.log("City:", userHash.get("city"));

for (let [key, value] of userHash) {
  console.log(`${key} → ${value}`);
}
