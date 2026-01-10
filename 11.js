// What are truthy and falsy values?
// In JavaScript, truthy and falsy values are used to determine the boolean value of an expression in contexts that require a boolean, such as conditional statements (if, while, etc.).

// Falsy Values:    
// Falsy values are values that are considered false when evaluated in a boolean context. The following values are considered falsy in JavaScript:
// 1. false
// 2. 0 (zero)
// 3. -0 (negative zero)
// 4. 0n (BigInt zero)
// 5. "" (empty string)
// 6. null
// 7. undefined
// 8. NaN (Not-a-Number)
// Example of falsy values:
console.log(Boolean(false));      // false
console.log(Boolean(0));
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));       // false   
    
// Truthy Values:
// Truthy values are values that are considered true when evaluated in a boolean context. Any value that is not falsy is considered truthy. Some common examples of truthy values include:
// 1. true  
// 2. Non-zero numbers (e.g., 1, -1, 3.14)
// 3. Non-empty strings (e.g., "hello", "0", "false")
// 4. Objects (e.g., {}, [])
// 5. Functions
// Example of truthy values:
console.log(Boolean(true));        // true
console.log(Boolean(42));          // true
console.log(Boolean("hello"));     // true
console.log(Boolean({}));        // true
console.log(Boolean([]));        // true
console.log(Boolean(function(){})); // true
// Usage in Conditional Statements:
// Truthy and falsy values are often used in conditional statements to control the flow of execution based on the truthiness of a value.        