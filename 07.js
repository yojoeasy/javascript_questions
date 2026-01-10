// What is typeof operator?

// The `typeof` operator in JavaScript is used to determine the data type of a given variable or expression. It returns a string indicating the type of the unevaluated operand. The possible return values of the `typeof` operator include:

// 1. "undefined": Indicates that the variable has not been assigned a value.   
// 2. "boolean": Indicates that the variable is a Boolean value (`true` or `false`).
// 3. "number": Indicates that the variable is a numeric value (both integer and floating-point).
// 4. "bigint": Indicates that the variable is a BigInt, which represents integers with arbitrary precision.    
// 5. "string": Indicates that the variable is a string of characters.
// 6. "symbol": Indicates that the variable is a Symbol, which is a unique and immutable primitive value.
// 7. "object": Indicates that the variable is an object (including arrays, null, and other complex data structures).
// 8. "function": Indicates that the variable is a function.
// Example:
let num = 42;
let str = "Hello, World!";  
let bool = true;
let undef;
let nul = null;
let sym = Symbol("unique");
let bigInt = 9007199254741991n;
let obj = { name: "Alice", age: 25 };
function greet() {
    console.log("Hello!");
}
console.log(typeof num); // "number"
console.log(typeof str); // "string"
console.log(typeof bool); // "boolean"
console.log(typeof undef); // "undefined"
console.log(typeof nul); // "object" (this is a known quirk in JavaScript)
console.log(typeof sym); // "symbol"
console.log(typeof bigInt); // "bigint"
console.log(typeof obj); // "object"
console.log(typeof greet); // "function"

// In summary, the `typeof` operator is a useful tool for checking the data type of variables and expressions in JavaScript.    