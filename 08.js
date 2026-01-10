// What is type coercion?

// Type coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another. This can happen in various situations, such as during arithmetic operations, comparisons, or when using certain operators. JavaScript is a loosely typed language, which means it allows for type coercion to make operations between different data types possible.

// There are two main types of type coercion in JavaScript: 
// 1. Implicit Coercion: This occurs when JavaScript automatically converts a value from one type to another without explicit instruction from the programmer. For example:
let result1 = '5' + 10; // '5' is coerced to a string, result is '510'
let result2 = '5' - 2;  // '5' is coerced to a number, result is 3  
// 2. Explicit Coercion: This occurs when the programmer explicitly converts a value from one type to another using functions or methods. For example:
let num = Number('5'); // Explicitly converting string to number
let str = String(10);  // Explicitly converting number to string    
// Common scenarios of type coercion include:
// - Using the `+` operator with strings and numbers, which results in string concatenation.
// - Using comparison operators (`==`, `!=`) that perform type coercion to compare values of different types.
// - Logical operations where non-boolean values are coerced to boolean (e.g., in `if` statements).     
// Example:
let a = '10';
let b = 5;  
let sum = a + b; // '10' + 5 results in '105' (string)
let difference = a - b; // '10' - 5 results in 5 (number)  
if (a == 10) { // '10' is coerced to number 10 for comparison
    console.log('Equal');
}  
console.log('1' + 1 + 1); // '1' + 1 results in '11', then '11' + 1 results in '111'
console.log(1 + 1 + '1'); // 1 + 1 results in 2, then 2 + '1' results in '21'\
console.log(1 + '1' + 1); // 1 + '1' results in '11', then '11' + 1 results in '111'
console.log('5' + '2'); // `5` and `2` are both strings, result is '52'
console.log(+'5' +  +'2'); // both '5' and '2' are coerced to numbers, result is 7
console.log('5' * '2'); // both '5' and '2' are coerced to numbers, result is 10
console.log(true + 1); // true is coerced to 1, result is 2
console.log(false + ' is false'); // false is coerced to 'false', result is 'false is false'    

// In summary, type coercion is a fundamental aspect of JavaScript that allows for flexible operations between different data types, but it can also lead to unexpected results if not properly understood.