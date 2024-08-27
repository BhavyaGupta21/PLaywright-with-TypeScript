// For Loop
// for (initialization; condition; increment/decrement) {
//     // Code to execute in each iteration  
// }

console.log("For loop");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop
// while(condition) {
//     // Code to be executed in each iteration
// }

console.log("While loop");
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Do While Loop
// do {
//     // Code to be executed in each iteration
// } while (condition);
console.log ("Do while loop");
let z = 0;
do {    
    console.log(z);
    z++;
} while (z < 5)

// Loop control Statements
// Break
console.log("Break");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exits the loop when i is 5
    }
    console.log(i);
}

// Continue
console.log("Continue");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Exits the loop when i is 5
    }
    console.log(i);
}
