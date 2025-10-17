
let globalVar = "I am global!";

function showScopes() {
  let localVar = "I am inside the function!";

  if (true) {
    let blockVar = "I exist only inside this block!";
    console.log(blockVar);
  }

  console.log(globalVar);
  console.log(localVar);

}

showScopes();

console.log(globalVar); 
