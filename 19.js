// What are objects in JavaScript?
// Objects in JavaScript are collections of key-value pairs that allow you to store and organize data. They are a fundamental data type in JavaScript and are used to represent real-world entities by grouping related properties and behaviors together. Objects can contain various types of values, including primitive data types (like strings, numbers, and booleans), other objects, and functions (known as methods when they are properties of an object).

// Creating an Object
const person = {
    name: 'John',
    age: 30,
    isEmployed: true,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Accessing Object Properties
console.log(person.name); // Output: John
console.log(person['age']); // Output: 30
// Calling Object Methods
person.greet(); // Output: Hello, my name is John

// Adding and Modifying Properties
person.city = 'New York';
person.age = 31;
console.log(person.city); // Output: New York
console.log(person.age); // Output: 31

// Deleting Properties
delete person.isEmployed;
console.log(person.isEmployed); // Output: undefined
// Iterating Over Object Properties
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 31
// greet: function() { ... }
// city: New York



// Nested Objects
const company = {
    name: 'Tech Corp',  
    address: {
        street: '123 Main St',
        city: 'San Francisco',
        state: 'CA'
    },
    employees: [
        { name: 'Alice', position: 'Developer' },
        { name: 'Bob', position: 'Designer' }
    ]
};
console.log(company.address.city); // Output: San Francisco
console.log(company.employees[0].name); // Output: Alice

// In summary, objects are versatile and powerful data structures in JavaScript that enable developers to model complex data and behaviors in a structured way. Understanding how to create, manipulate, and utilize objects is essential for effective JavaScript programming.


// Dot notation vs bracket notation
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    'full color': 'Red'
};
console.log(car.make); // Dot notation - Output: Toyota
console.log(car['model']); // Bracket notation - Output: Camry
console.log(car['full color']); // Bracket notation for property with space - Output: Red
// car.full color; // This would cause a syntax error

// Dynamic property access
const propertyName = 'year';
console.log(car[propertyName]); // Output: 2020

// Using variables as property keys
const key = 'make';
console.log(car[key]); // Output: Toyota

// Summary
// Use dot notation for standard property names without special characters or spaces.
// Use bracket notation when property names contain spaces, special characters, or when accessing properties dynamically using variables.

let val1 = "toString";
console.log(car[val1]()); // Output: [object Object]

console.log(typeof car.toString); // Output: function
console.log(typeof car["toString"]); // Output: function
console.log(car.hasOwnProperty("model")); // Output: true
console.log(car["hasOwnProperty"]("model")); // Output: true
console.log(car.val1); // Output: undefined
console.log(car["val1"]); // Output: undefined
// console.log(car.name()); // TypeError: car.name is not a function
// console.log(car.hasOwnProperty("toString")()); // typeError: car.hasOwnProperty is not a function


// all methods of Object?

Object.keys(car); // array of keys
Object.values(car); // array of values
Object.entries(car); // array of [key, value] pairs
Object.assign({}, car); // shallow copy
Object.freeze(car); // make object immutable
Object.seal(car); // prevent adding/removing properties
Object.getOwnPropertyNames(car);
Object.getOwnPropertyDescriptors(car);


const car1 = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    'full color': 'Red'
};
Object.defineProperty(car1, 'color', {
    value: 'Blue',
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(car1.color); // Output: Blue
Object.defineProperties(car1, {
    wheels: {
        value: 4,
        writable: false
    },
    doors: {
        value: 4,
        writable: false
    }
});
console.log(car1.wheels); // Output: 4
console.log(Object.isFrozen(car1)); // Output: false
console.log(Object.isSealed(car1)); // Output: false
console.log(Object.getPrototypeOf(car1)); // Output: [Object: null prototype] {}