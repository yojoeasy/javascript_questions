// What is a callback function?

// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are commonly used for asynchronous operations, such as handling events, making API calls, or performing tasks that take time to complete.

// Example of a callback function:  
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe' }; // Simulated fetched data
        callback(data); // Execute the callback with the fetched data
    }, 1000);
}
function displayData(data) {
    console.log('Fetched Data:', data);
}
fetchData(displayData); // Pass displayData as a callback to fetchData

// Another example of a callback function:
function greet(name) {
  console.log("Hello " + name);
}
function processUser(callback) {
  callback("Yogesh");   // calling back
}
processUser(greet);

// Callback with Anonymous / Arrow Function
function fetchNumbers(callback) {
    setTimeout(() => {
        const numbers = [1, 2, 3, 4, 5];
        callback(numbers);
    }, 1000);
}
fetchNumbers(function(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log('Sum of numbers:', sum);
});
fetchNumbers((numbers) => {
    const product = numbers.reduce((acc, num) => acc * num, 1);
    console.log('Product of numbers:', product);
});

setTimeout(() => {
  console.log("Done!");
}, 0);

// In summary, callback functions are essential in JavaScript for handling asynchronous operations and enabling more flexible and modular code. They allow you to define what should happen after a certain task is completed without blocking the execution of other code.

// Callback in Array Methods
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2]

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 6

// Understanding 'this' in Callback Functions
const person = {
    name: 'Charlie',   
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
        setTimeout(function() {
            console.log(`Inside setTimeout: Hello, my name is ${this.name}`);
        }.bind(this), 1000); // Using bind to set 'this'

        setTimeout(function() {
            console.log(`Inside setTimeout: Hello, my name is ${this.name}`);
        }, 2000); // Using bind to set 'this'
    }   
};
person.greet(); // Output: Hello, my name is Charlie
// After 1 second: Inside setTimeout: Hello, my name is Charlie


// Synchronous Callback
[1, 2, 3].forEach(n => console.log(n)); // Output: 1 2 3

// Example of using a callback function with error handling
function fetchDataWithErrorHandling(callback) {
    setTimeout(() => {
        const error = null; // Simulate no error
        const data = { id: 1, name: 'John Doe' };
        if (error) {
            callback(error, null);
        } else {
            callback(null, data);
        }
    }, 1000);
}

fetchDataWithErrorHandling((error, data) => {
    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Fetched Data:', data);
    }
});
// Output: Fetched Data: { id: 1, name: 'John Doe' }


