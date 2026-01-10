// Difference between primitive and non-primitive data types?

// In JavaScript, data types can be broadly categorized into primitive and non-primitive types (objects). The main differences between these two categories are as follows:

// 1. Primitive Data Types:
//    - Definition: Primitive data types are the most basic data types in JavaScript. They represent single values and do not have properties or methods.
//    - Types: The primitive data types in JavaScript include:
//      - Number
//      - String
//      - Boolean
//      - Undefined
//      - Null
//      - Symbol
//      - BigInt
//    - Immutability: Primitive values are immutable, meaning that their values cannot be changed once they are created. Any operation on a primitive value results in the creation of a new value.
//    - Storage: Primitive values are stored directly in the variable's memory location.   

// 2. Non-Primitive Data Types (Objects):
//    - Definition: Non-primitive data types, or objects, are more complex data structures that can hold multiple values and have properties and methods.
//    - Types: The primary non-primitive data type in JavaScript is the Object. This category also includes Arrays and Functions, which are special types of objects.
//    - Mutability: Objects are mutable, meaning that their properties and values can be changed after they are created.
//    - Storage: Variables that hold objects store a reference (or pointer) to the location in memory where the object is stored, rather than the object itself.   

// Example:

// Primitive Data Types
let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true; // Boolean     
let undef; // Undefined
let nul = null; // Null
let sym = Symbol("unique"); // Symbol
let bigInt = 9007199254741991n; // BigInt 

// Non-Primitive Data Types (Objects)
let obj = { name: "Alice", age: 25 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
function greet() { // Function
    console.log("Hello!");
}    
   
// In summary, primitive data types represent single, immutable values and are stored directly in memory, while non-primitive data types (objects) can hold multiple values, are mutable, and are stored as references in memory.