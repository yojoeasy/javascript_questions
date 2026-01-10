// What are data types in JavaScript?

// In JavaScript, data types are the classification or categorization of data items. They determine the kind of value a variable can hold and what operations can be performed on that data. JavaScript has several built-in data types, which can be broadly categorized into primitive types and non-primitive types (objects).

// 1. Primitive Data Types: 
//    - Number: Represents both integer and floating-point numbers. Example: `42`, `3.14`.
//    - String: Represents a sequence of characters. Example: `"Hello, World!"`, `'JavaScript'`.
//    - Boolean: Represents a logical entity and can have two values: `true` or `false`.    
//    - Undefined: A variable that has been declared but not assigned a value has the value `undefined`.
//    - Null: Represents the intentional absence of any object value. It is a primitive value that represents "no value" or "empty value".
//    - Symbol: Introduced in ES6, it is used to create unique identifiers for objects.
//    - BigInt: Represents integers with arbitrary precision, allowing for the representation of very large integers beyond the safe limit for Numbers.

// 2. Non-Primitive Data Types (Objects):
//    - Object: A collection of key-value pairs. Objects can hold multiple values and complex data structures. Example: `{ name: "Alice", age: 25 }`.
//    - Array: A special type of object used to store ordered collections of values. Example: `[1, 2, 3, 4, 5]`.
//    - Function: Functions are also objects in JavaScript and can be treated as first-class citizens. They can be assigned to variables, passed as arguments, and returned from other functions. 
  
// Example:
let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true; // Boolean
let undef; // Undefined
let nul = null; // Null
let sym = Symbol("unique"); // Symbol
let bigInt = 9007199254741991n; // BigInt   
let obj = { name: "Alice", age: 25 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
function greet() { // Function
    console.log("Hello!");
}   
// In summary, JavaScript provides a variety of data types to handle different kinds of data, from simple values like numbers and strings to complex structures like objects and arrays.