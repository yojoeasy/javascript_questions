// What are loops in JavaScript?

// Loops in JavaScript are control structures that allow you to execute a block of code multiple times based on a specified condition. They are useful for iterating over arrays, objects, or executing code repeatedly until a certain condition is met. JavaScript provides several types of loops:

// 1. for Loop:
// The for loop is used to execute a block of code a specific number of times. It consists of three parts: initialization, condition, and increment/decrement.
for (let i = 0; i < 5; i++) {
    console.log('for loop iteration:', i);
}   

// 2. while Loop:
// The while loop executes a block of code as long as the specified condition is true.
let j = 0;  
while (j < 5) {
    console.log('while loop iteration:', j);
    j++;
}

// 3. do...while Loop:
// The do...while loop is similar to the while loop, but it guarantees that the block of code will be executed at least once before checking the condition.
let k = 0;  
do {
    console.log('do...while loop iteration:', k);
    k++;
} while (k < 5); 

// 4. for...in Loop:
// The for...in loop is used to iterate over the enumerable properties of an object.
const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(`for...in loop key: ${key}, value: ${obj[key]}`);
}

// 5. for...of Loop:
// The for...of loop is used to iterate over iterable objects like arrays, strings, maps, and sets.
const arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    console.log('for...of loop value:', value);
}

// 6. forEach Loop:
// The forEach method is an array method that executes a provided function once for each array element.
arr.forEach((value, index) => {
    console.log(`forEach loop index: ${index}, value: ${value}`);
});

// 7. for await...of Loop:
// The for await...of loop is used to iterate over asynchronous iterable objects, such as streams or async generators.
async function asyncIterableExample() {
    const asyncIterable = {
        async *[Symbol.asyncIterator]() {
            for (let i = 0; i < 5; i++) {
                yield new Promise(resolve => setTimeout(() => resolve(i), 1000));
            }
        }   
    };
    for await (let value of asyncIterable) {
        console.log('for await...of loop value:', value);
    }
}
asyncIterableExample(); 

// Summary:
// - Use loops to execute code multiple times based on conditions.
// - Choose the appropriate loop type based on your specific use case (e.g., for fixed iterations, iterating over object properties, or iterating over iterable collections).
// - Be cautious of infinite loops by ensuring that the loop's condition will eventually evaluate to false. 


// What is break and continue?
// In JavaScript, `break` and `continue` are control flow statements used within loops to alter their execution behavior.

// 1. break Statement:
// The `break` statement is used to exit a loop prematurely, terminating the loop's execution entirely. When `break` is encountered, the control is transferred to the statement immediately following the loop.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log('break example i:', i);
}
// Output: 0, 1, 2, 3, 4

// 2. continue Statement:
// The `continue` statement is used to skip the current iteration of a loop and move on to the next iteration. When `continue` is encountered, the remaining code in the current iteration is skipped, and the loop proceeds to the next iteration.
for (let j = 0; j < 10; j++) {
    if (j % 2 === 0) {  
        continue; // Skip even numbers
    }
    console.log('continue example j:', j);
}
// Output: 1, 3, 5, 7, 9

// Summary:
// - Use `break` to exit a loop entirely when a certain condition is met.
// - Use `continue` to skip the current iteration and proceed to the next one based on a condition.
// - Both statements help control the flow of loops and can be useful for optimizing performance or handling specific scenarios within iterations.

// Example with nested loops:
for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
        if (y === 1) {
            continue; // Skip when y is 1
        }
        console.log(`Nested loop x: ${x}, y: ${y}`);
    }
}   
// Output:
// x: 0, y: 0
// x: 0, y: 2
// x: 1, y: 0
// x: 1, y: 2
// x: 2, y: 0
// x: 2, y: 2
// In conclusion, `break` and `continue` are powerful tools for managing loop execution in JavaScript, allowing developers to create more efficient and controlled iterations.

// Example with labeled statements:
outerLoop: for (let m = 0; m < 3; m++) {
    for (let n = 0; n < 3; n++) {
        if (n === 1) {
            break outerLoop; // Exit the outer loop when n is 1
        }
        console.log(`Labeled loop m: ${m}, n: ${n}`);
    }
}
// Output:
// m: 0, n: 0
// In this example, when `n` equals 1, the `break outerLoop;` statement exits the entire outer loop, demonstrating how labeled statements can be used with `break` to control nested loops more effectively.

// Note: Labeled statements can make code harder to read, so use them judiciously.
let truthyValues = [true, 1, -1, "hello", {}, [], function(){}];
let falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
truthyValues.forEach(value => {
    if (value) {
        console.log('Truthy value:', value);
    }
});
falsyValues.forEach(value => {
    if (!value) {
        console.log('Falsy value:', value);
    }
});
