// What is NaN?

// NaN stands for "Not-a-Number" and is a special value in JavaScript that represents an undefined or unrepresentable numerical result. It is of the type 'number', but it indicates that a value is not a valid number.

// NaN is typically the result of operations that do not yield a meaningful numeric value. For example:        
console.log(0 / 0);          // NaN, because division by zero is undefined
console.log(Math.sqrt(-1)); // NaN, because the square root of a negative number is not a real number
console.log(parseInt('abc')); // NaN, because 'abc' cannot be converted to a number 
console.log(undefined + 5); // NaN, because undefined cannot be coerced to a number in arithmetic operations

// Characteristics of NaN:
// 1. NaN is the only value in JavaScript that is not equal to itself. This means that:
console.log(NaN === NaN); // false  

// 2. To check if a value is NaN, you can use the built-in isNaN() function or Number.isNaN() method:
console.log(isNaN(NaN)); // true
console.log(Number.isNaN(NaN)); // true 
console.log(isNaN('hello')); // true, because 'hello' cannot be converted to a number
console.log(Number.isNaN('hello')); // false, because 'hello' is not of type number

// 3. NaN is contagious in arithmetic operations. If any operand in an arithmetic operation is NaN, the result will also be NaN:
console.log(NaN + 5); // NaN
console.log(NaN * 10); // NaN    

// Summary:
// - NaN represents an invalid or unrepresentable number in JavaScript.
// - It is of type 'number' but indicates a non-numeric value.
// - NaN is not equal to itself, so use isNaN() or Number.isNaN() to check for it.
// - Any arithmetic operation involving NaN results in NaN.
// Understanding NaN is important for handling numerical computations and avoiding unexpected results in JavaScript programs.


// How to check if a value is NaN?
// To check if a value is NaN in JavaScript, you can use either the global isNaN() function or the Number.isNaN() method. Here’s how to use both:

// 1. Using isNaN() function:
let value1 = NaN;
console.log(isNaN(value1)); // true, because value1 is NaN
let value2 = 'hello';
console.log(isNaN(value2)); // true, because 'hello' cannot be converted to a number

// 2. Using Number.isNaN() method:
let value3 = NaN;
console.log(Number.isNaN(value3)); // true, because value3 is NaN
let value4 = 'hello';
console.log(Number.isNaN(value4)); // false, because 'hello' is not of type number

// Note:
// - isNaN() performs type coercion, so it may return true for non-number types that cannot be converted to a number.
// - Number.isNaN() does not perform type coercion and only returns true for values that are strictly of type number and equal to NaN.  
// Example:
let testValue1 = '123abc';
console.log(isNaN(testValue1)); // true, because '123abc' cannot be converted to a number
console.log(Number.isNaN(testValue1)); // false, because '123abc' is not of type number 
let testValue2 = 123;
console.log(isNaN(testValue2)); // false, because 123 is a valid number
console.log(Number.isNaN(testValue2)); // false, because 123 is not NaN 
// In summary, use isNaN() when you want to check if a value cannot be converted to a number, and use Number.isNaN() when you want to strictly check for the NaN value.
