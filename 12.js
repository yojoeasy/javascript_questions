// What is undefined vs null?
// In JavaScript, both `undefined` and `null` represent the absence of a value, but they are used in different contexts and have different meanings.

// 1. Undefined:        
// `undefined` is a primitive value that indicates that a variable has been declared but has not yet been assigned a value. It is the default value of uninitialized variables, function parameters that are not provided, and missing object properties.
let a;
console.log(a); // Output: undefined

function exampleFunc(param) {
    console.log(param); // Output: undefined if no argument is passed
}       
exampleFunc();
let obj = {};
console.log(obj.property); // Output: undefined, since 'property' does not exist in 'obj'


// 2. Null:
// `null` is an assignment value that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or that an object reference is intentionally empty.
let b = null;
console.log(b); // Output: null
let obj2 = { key: null };
console.log(obj2.key); // Output: null, indicating that 'key' is intentionally set to no value

// Key Differences:

// - Type: `undefined` is of type 'undefined', while `null` is of type 'object' (this is a quirk in JavaScript).
console.log(typeof undefined); // Output: 'undefined'
console.log(typeof null);      // Output: 'object'

// - Usage: `undefined` typically indicates that a variable has not been assigned a value, while `null` is used to explicitly indicate the absence of a value.

// - Equality: When using loose equality (`==`), `undefined` and `null` are considered equal. However, with strict equality (`===`), they are not equal because they are of different types.    
console.log(undefined == null);  // Output: true
console.log(undefined === null); // Output: false

// Summary:
// - Use `undefined` to indicate that a variable has not been assigned a value.
// - Use `null` to explicitly indicate the absence of a value or an empty object reference.

// Understanding the difference between `undefined` and `null` is important for effective JavaScript programming and avoiding potential bugs related to value assignments and checks.

// Example Usage:
let user; // user is declared but not assigned, so it's undefined
console.log(user); // Output: undefined
user = null; // user is explicitly set to null, indicating no value
console.log(user); // Output: null

// Checking for undefined and null:
if (user === undefined) {
    console.log('User is undefined');
} else if (user === null) {
    console.log('User is null');
} else {
    console.log('User has a value');
}

// In this example, the output will be 'User is null' since we explicitly set `user` to `null`.

// Note: In practice, it's often a good idea to initialize variables to `null` if you intend to assign them a value later, as this makes your intentions clearer.

