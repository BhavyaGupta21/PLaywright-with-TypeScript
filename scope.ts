// Global Scope: Accessible from anywhere in TS code
const globalVar = 10;

function randomFun() {
    console.log(globalVar);
}
randomFun();

// local Scope: Variables defined inside a function will have local scope. They are accessible only within the fucntion they are declared in.
function randomFun2() {
    const localVar = 20;
    console.log(localVar);
    console.log(globalVar);
}
// console.log(localVar);
randomFun2();

// Block Scope: Variables declared using "let" or "const" inside a block (if, else, etc.) will have a block scope. They are accessible only within the block they are declared
if (true) {
    const blockVar = 30;
    console.log(blockVar);
}
//console.log(blockVar);

// In TS, it is recommended to use "let" and "const" instead of "var"
