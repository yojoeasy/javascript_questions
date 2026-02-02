// What are arrays?
// Arrays in JavaScript are special objects that store multiple values in a single variable. They are ordered collections of items, which can be of any data type, including numbers, strings, objects, and even other arrays. Arrays allow you to group related data together and perform various operations on that data. 

// Creating an Array
const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

// Accessing Array Elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Cherry


// Array Methods

// 1. push() - Adds one or more elements to the end of an array
fruits.push('Date');
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date']

// 2. pop() - Removes the last element from an array
const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

// 3. shift() - Removes the first element from an array
const firstFruit = fruits.shift();  
console.log(firstFruit);
console.log(fruits); // Output: ['Banana', 'Cherry']

// 4. unshift() - Adds one or more elements to the beginning of an array
fruits.unshift('Apricot');  
console.log(fruits); // Output: ['Apricot', 'Banana', 'Cherry']

// 5. indexOf() - Returns the first index at which a given element can be found
const index = fruits.indexOf('Banana');  
console.log(index); // Output: 1

// 6. splice() - Adds/Removes elements from an array
fruits.splice(1, 1, 'Blueberry');   
console.log(fruits); // Output: ['Apricot', 'Blueberry', 'Cherry']

// 7. slice() - Returns a shallow copy of a portion of an array
const citrus = fruits.slice(0, 2);  
console.log(citrus); // Output: ['Apricot', 'Blueberry']

// 8. forEach() - Executes a provided function once for each array element
fruits.forEach(fruit => console.log(fruit));
// Output: Apricot Blueberry Cherry

// 9. map() - Creates a new array with the results of calling a provided function on every element
const upperFruits = fruits.map(fruit => fruit.toUpperCase());   
console.log(upperFruits); // Output: ['APRICOT', 'BLUEBERRY', 'CHERRY']

// 10. filter() - Creates a new array with all elements that pass the test implemented by the provided function
const bFruits = fruits.filter(fruit => fruit.startsWith('B'));  
console.log(bFruits); // Output: ['Blueberry']

// 11. reduce() - Executes a reducer function on each element of the array, resulting in a single output value
const fruitString = fruits.reduce((acc, fruit) => acc + ', ' + fruit);  
console.log(fruitString); // Output: Apricot, Blueberry, Cherry

push()     // add at end
unshift()  // add at start
pop()      // remove from end
shift()    // remove from start
splice(start, deleteCount, item1, item2)
slice(start, end)
length       // number of elements
includes()   // true / false
indexOf()    // index or -1
lastIndexOf()
at()         // access by index (supports negative)
arr.includes(10);
arr.indexOf(5);
arr.at(-1); // last element

forEach()   // loop, no return
map()       // transform array
filter()    // select elements
reduce()    // reduce to single value
some()      // at least one matches?
every()     // all match?
find()      // first match
findIndex() // index of first match
findLast()
findLastIndex()

concat()    // merge arrays
slice()     // copy part of array
toSpliced() // non-mutating splice

join()       // array → string
toString()
flat()       // flatten nested arrays
flatMap()    // map + flat

sort()
reverse()
toSorted()   // non-mutating sort
toReversed() // non-mutating reverse

includes()
some()
every()

fill(value, start, end)
Array.from()
Array.of()

keys()
values()
entries()

Array.isArray()
Array.from()
Array.of()


const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
console.log(arr); // [4, 5, 3, 4, 5]

for (const [i, v] of arr.entries()) {
  console.log(i, v);
}

for (const key of arr.keys()) {
  console.log(key);
}

for (const key of arr.values()) {
  console.log(key);
}

const arr1 = [1000, new Date()];
console.log(arr.toLocaleString());
