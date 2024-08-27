// There are 2 ways to initialize the array
// Array Literals
const fruits: string[] = ['apple', 'banana', 'cherry'];

// Array Constructor
const numbers: number[] = new Array(1, 2, 3, 4, 5);

// Initialize an empty array
const emptyArray: string[] = [];

// Access elemets within the array
console.log(fruits[0]);
console.log(fruits[2]);

// Modify value inside the array
console.log(numbers[2])
numbers[2] = 10;
console.log(numbers[2])

// Available methods for array
// push
numbers.push(6); // Adds element at the end of the array
console.log(numbers[5]);

// pop
numbers.pop(); // Removes the last element of the array
console.log(numbers[5]);

// shift
console.log(numbers[0]);
numbers.shift(); // Removes the first element of the array
console.log(numbers[0]);

// unshift
console.log(numbers[0]);
numbers.unshift(1); // Adds an element at the beginning of the array
console.log(numbers[0]);

// slice
const slicedArray = numbers.slice(1, 3) // Create a new array from index 1 - 2
console.log(slicedArray);

// map
const doubledArray = numbers.map((num) => num * 2) // Take each element from the array and multiply it by 2
console.log(doubledArray);

// filter
const filteredArray = numbers.filter((num) => num > 2); // Return values based on the conditions mentioned
console.log(numbers);
console.log(filteredArray);

// Read Only Arrays
const readOnlyArray: readonly number[] = [1, 2, 3]; // This will allow us to read but not modify the array
