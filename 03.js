// Q3 What are variables in JavaScript?
// Variables in JavaScript are used to store data values that can be referenced and manipulated throughout a program. They act as containers for holding information such as numbers, strings, objects, arrays, and more. Variables are essential for managing state and enabling dynamic behavior in JavaScript applications.

// In JavaScript, variables can be declared using three keywords: var, let, and const.  

// 1. var: This keyword is used to declare variables with function scope. Variables declared with var can be re-declared and updated within their scope. However, var has some quirks related to hoisting and scope that can lead to unexpected behavior.
// Example:
var name = "Alice";
console.log(name); // Output: Alice

// 2. let: This keyword is used to declare block-scoped variables. Variables declared with let can be updated but not re-declared within the same scope. let is generally preferred over var due to its block scope behavior, which helps avoid certain pitfalls.   
// Example:
let age = 25;
age = 26;
console.log(age); // Output: 26

// 3. const: This keyword is used to declare block-scoped variables that cannot be reassigned after their initial assignment. However, if the variable holds an object or array, the contents of the object or array can still be modified. const is useful for defining constants or values that should not change.
// Example:
const pi = 3.14;
// pi = 3.14159; // This will throw an error
console.log(pi); // Output: 3.14

// Overall, variables in JavaScript are fundamental for storing and managing data, and understanding the differences between var, let, and const is crucial for writing effective and bug-free code.