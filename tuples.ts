// A data structure that allows to store elements each with specific type. It allows to defined a fixed number of elements each with its own type. It also provides type safety and a structured way to work with the data when the number of elements and types are known in advance.

// Declaration
let person: [string, number] = ['Playwright', 10];

// Accessing tuple elements (Similar to array)
let username: string = person[0]
let userAge: number = person[1]

console.log(username);
console.log(userAge);

console.log(person);
person[0] = 'John' // It won't allow any other data type value other than String
person[1] = 30
console.log(person);

// Tuple vs. Array

// 1. Type Consistency
// 2. Type Safety
// 3. Mutability
// 4. Use Cases