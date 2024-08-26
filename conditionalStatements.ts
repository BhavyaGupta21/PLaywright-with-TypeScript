// If Statement
// if (condition) {
//     // Code to be executed if the condition is true
// }

let myAgeNow = 25;
if (myAgeNow >= 18) {
    console.log("You are an adult");
}

// Else If Statement
// if (condition1) {
//     // Code to be executed if the condition1 is true
// } else if (condition2) 
//     // Code to be executed if the condition2 is true

let num3 = 10;

if (num3 > 0) {
    console.log ("This is a positive number");
} else if (num3 < 0) {
    console.log("This ia a negative number");
}

// Else Statement
// if (condition) {
//     // Code to be executed if the condition is true
// }
// else {
//     // Code to be executed if none of the condition is false
// }

let num4 = 0;

if (num4 > 0) {
    console.log ("This is a positive number");
} else if (num4 < 0) {
    console.log("This ia a negative number");
} else {
    console.log("This is zero");
}

// Nested Condition
let num5 = 10
if (num5 >= 0) {
    if (num5 === 0) {
        console.log("Number is zero");
    }
    else {
        console.log("Number is positive");
    }
} else {
    console.log("Number is negative");
}