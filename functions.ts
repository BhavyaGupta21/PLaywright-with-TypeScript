// Defining blocks of reusable code

// Declaration
function hi() {
    console.log("I am a function");
}

// Calling a function
hi();

// Passing parameters
function calculateTotal(price: number, quality: number): number {
    return price * quality
}

console.log(calculateTotal(2, 3));

// Optional parameter
function greet(name: string, greetMessage?: string) {
    if (greetMessage) {
        return `Hi ${name}, ${greetMessage}`
    } else {
        return `Hi ${name}`
    }
}

console.log(greet('Alice', 'Good morning'));
console.log(greet('Alice'));

// Default parameter
function add(a: number, b: number = 0) {
    console.log(a + b); 
}

add(1, 2);
add(1);

// Arrow Function
const multiply = (a: number, b: number): number => a * b;

console.log(multiply(2, 3));

let e = 5;
let f = 5;
type MatchOperation = (a: number, b: number) => number;
const addNew: MatchOperation = (e, f) => e + f;

console.log(addNew(e, f));