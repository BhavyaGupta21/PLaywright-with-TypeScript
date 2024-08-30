// Collection of Key-Value pairs

// Declaration
const personNew = {
    name: 'Playwright',
    age: 10,
    isStudent: false
}

console.log(personNew);

const personNew2: {name: string, age: number, isStudent: boolean} = { // Retains the type of the element that will be used in each key
    name: 'Playwright',
    age: 10,
    isStudent: false
}

// Access object
console.log(personNew2.isStudent);

const contactInfo = {
    email: 'playwrightdemo@gmail.com',
    phone: 123456
}

const mergedPerson = {...personNew, ...contactInfo};
console.log(mergedPerson);

type Person = {
    name: string,
    age: number
}

const playwright: Person = {
    name: 'playwright',
    age: 25
}