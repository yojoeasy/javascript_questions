// Difference between == and ===?
// In JavaScript, `==` is the equality operator that performs type coercion before comparing two values, meaning it converts the values to a common type if they are of different types. On the other hand, `===` is the strict equality operator that compares both the value and the type without performing any type conversion.

// Example:
let x = '5';
let y = 5;  
console.log(x == y);  // true, because '5' is coerced to 5 before comparison
console.log(x === y); // false, because the types are different (string vs number)

// Another Example:
let a = 0;
let b = false;  
console.log(a == b);  // true, because false is coerced to 0 before comparison
console.log(a === b); // false, because the types are different (number vs boolean)

// Summary:
// - Use `==` when you want to compare values with type coercion.
// - Use `===` when you want to compare both value and type strictly, without any type conversion.  
// It's generally recommended to use `===` to avoid unexpected results due to type coercion.

// Additional Examples:
console.log(null == undefined);  // true, because null and undefined are considered equal in non-strict comparison
console.log(null === undefined); // false, because they are of different types
console.log('' == 0);  // true, because '' is coerced to 0 before comparison
console.log('' === 0); // false, because the types are different (string vs number)     
console.log([] == false);  // true, because [] is coerced to '' which is then coerced to 0
// console.log([] === false); // false, because the types are different (object vs boolean)    
console.log([1,2] == '1,2');  // true, because [1,2] is coerced to '1,2' before comparison
// console.log([1,2] === '1,2'); // false, because the types are different (object vs string)
console.log({}.toString() == '[object Object]');  // true, because {}.toString() returns '[object Object]'
// console.log({} === '[object Object]'); // true, because both are strings with the same value

// In conclusion, understanding the difference between `==` and `===` is crucial for writing predictable and bug-free JavaScript code.