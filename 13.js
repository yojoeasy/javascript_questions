// What are operators in JavaScript?
// Operators are special symbols or keywords in JavaScript that perform operations on one or more operands (values or variables) to produce a new value. They are used to manipulate data, perform calculations, compare values, and control the flow of execution in a program. JavaScript supports various types of operators, including:

// 1. Arithmetic Operators: Used for mathematical calculations. 
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // Modulus operator 
console.log(a ** b); // Exponentiation operator

// 2. Assignment Operators: Used to assign values to variables.
let c = 20; // Simple assignment
c += 5;
c -= 3;
c *= 2;
c /= 4;
console.log(c);

// 3. Comparison Operators: Used to compare two values and return a boolean result.
console.log(a == b); // Equal to
console.log(a === b); // Strict equal to
console.log(a != b); // Not equal to
console.log(a !== b); // Strict not equal to
console.log(a > b); // Greater than
console.log(a < b); // Less than
console.log(a >= b); // Greater than or equal to
console.log(a <= b); // Less than or equal to

// 4. Logical Operators: Used to combine multiple boolean expressions.
let x = true;
let y = false;
console.log(x && y);
console.log(x || y);
console.log(!x);    

// 5. Bitwise Operators: Used to perform bit-level operations on binary representations of numbers.
console.log(a & b); // AND
console.log(a | b); // OR
console.log(a ^ b); // XOR
console.log(~a); // NOT
console.log(a << 1); // Left shift
console.log(a >> 1); // Right shift 
console.log(a >>> 1); // Unsigned right shift

// 6. Ternary Operator: A shorthand for an if-else statement.
let age = 18;
let canVote = (age >= 18) ? 'Yes' : 'No';
console.log(canVote);

// 7. typeof Operator: Used to determine the type of a variable or value.
console.log(typeof a);
console.log(typeof 'Hello');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null); // Note: returns 'object' due to a historical bug

// 8. instanceof Operator: Used to check if an object is an instance of a specific class or constructor function.
let date = new Date();
console.log(date instanceof Date); // true
console.log(date instanceof Object); // true

// In summary, operators are essential components of JavaScript that enable developers to perform various operations on data, manipulate values, and control program flow effectively. Understanding how to use these operators is fundamental to writing efficient and functional JavaScript code. 

