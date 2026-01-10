// What are functions?

// Functions in JavaScript are reusable blocks of code that perform a specific task. They allow you to encapsulate logic, making your code more organized, modular, and easier to maintain. Functions can take inputs (parameters), perform operations, and return outputs (return values).

// There are several ways to define functions in JavaScript:    
// 1. Function Declaration:
function greet(name) {
    return `Hello, ${name}!`;
}   
console.log(greet('Alice')); // Output: Hello, Alice!

// 2. Function Expression:
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // Output: 8

// 3. Arrow Function (ES6):
const multiply = (x, y) => x * y;
console.log(multiply(4, 2)); // Output: 8

// 4. Immediately Invoked Function Expression (IIFE):
(function() {
    console.log('This function runs immediately upon definition.');
})(); // Output: This function runs immediately upon definition.

// Functions can also have default parameters:
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}   
console.log(power(3)); // Output: 9 (3^2)
console.log(power(2, 3)); // Output: 8 (2^3)    

// Functions can return values using the `return` statement. If no return statement is provided, the function returns `undefined` by default.
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false

// Functions can also be assigned to variables, passed as arguments to other functions (higher-order functions), and returned from other functions.
function operate(operation, a, b) {
    return operation(a, b);
}
console.log(operate(add, 5, 3)); // Output: 8
console.log(operate(multiply, 4, 2)); // Output: 8

// In summary, functions are fundamental building blocks in JavaScript that help you write clean, efficient, and reusable code.

// Example of a higher-order function:
function filterArray(arr, predicate) {
    const result = [];  
    for (let item of arr) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // Output: [2, 4, 6]

// Example of a function returning another function:
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}
const addFive = makeAdder(5);
console.log(addFive(10)); // Output: 15 
console.log(addFive(20)); // Output: 25

// Example of recursion:
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // Output: 1 (by definition)
// In conclusion, functions are versatile and powerful tools in JavaScript that enable developers to create modular, maintainable, and efficient code.
// Understanding functions is essential for mastering JavaScript and building complex applications.
// Example of function hoisting:
console.log(square(4)); // Output: 16
function square(n) {
    return n * n;
}
// In this example, the function `square` is called before its declaration due to function hoisting in JavaScript.
// Example of using rest parameters:
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10
console.log(sumAll(5, 10, 15));   // Output: 30
// In this example, the `sumAll` function can take any number of arguments and sums them up using the rest parameter syntax.    
// Example of using default parameters with destructuring:
function createUser({ name = 'Guest', age = 18, isAdmin = false } = {}) {
    return { name, age, isAdmin };
}
console.log(createUser({ name: 'Bob', age: 25 })); // Output: { name: 'Bob', age: 25, isAdmin: false }
console.log(createUser()); // Output: { name: 'Guest', age: 18, isAdmin: false }
// In this example, the `createUser` function uses destructuring with default parameters to create a user object. If no argument is provided, it defaults to an empty object.           
// Example of function binding:
const person = {
    name: 'Charlie',    
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
const greetFunction = person.greet;
greetFunction(); // Output: Hello, my name is undefined
const boundGreet = greetFunction.bind(person);
boundGreet(); // Output: Hello, my name is Charlie
// In this example, the `bind` method is used to create a new function with `this` bound to the `person` object.
// Example of using async functions:
async function fetchData(url) {
    try {   
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData('https://api.example.com/data')
    .then(data => console.log(data));
// In this example, the `fetchData` function is an asynchronous function that fetches data from a given URL and returns the parsed JSON data.
  