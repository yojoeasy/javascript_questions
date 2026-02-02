// Function declaration vs function expression?

// Function Declaration:
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expression:
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet('Alice')); // Output: Hello, Alice!

const makeAdder = function(x) { 
    return function(y) {
        return x + y;
    };
};

const addFive = makeAdder(5);
console.log(addFive(3)); // Output: 8
console.log(greet('Alice')); // Output: Hello, Alice!
// Output: Hello, Alice!

// Function Expression:
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet('Alice')); // Output: Hello, Alice!
// Output: Hello, Alice!

// Both function declarations and function expressions can be used to define functions in JavaScript. The main difference lies in hoisting: function declarations are hoisted to the top of their scope, allowing them to be called before they are defined, while function expressions are not hoisted and can only be called after they are defined.

// Example of hoisting with function declaration:
console.log(declaredFunction()); // Output: This function is declared.
function declaredFunction() {
    return 'This function is declared.';
}
// Example of hoisting with function expression:
// console.log(expressFunction()); // Uncaught ReferenceError: Cannot access 'expressFunction' before initialization
const expressFunction = function() {
    return 'This function is expressed.';
};
console.log(expressFunction()); // Output: This function is expressed.
// Output: This function is expressed.

// Both function declarations and function expressions can be used to define functions in JavaScript. The main difference lies in hoisting: function declarations are hoisted to the top of their scope, allowing them to be called before they are defined, while function expressions are not hoisted and can only be called after they are defined.

// Final Comparison Table
// Feature	                Normal Function         	Arrow Function
// this	                    Dynamic	                    Lexical
// arguments	            Yes	                        No
// Constructor	            Yes	                        No
// Hoisting	                Yes	                        No
// prototype	            Yes	                        No
// Best use	            Methods, constructors	    Callbacks, React

// use arguments object in normal function
function normalFunction() {
    console.log(arguments);
}
normalFunction(1, 2, 3); // Output: [1, 2, 3]

// use arguments object in arrow function
const arrowFunction = () => {
    console.log(arguments);
};  
// arrowFunction(1, 2, 3); // Uncaught ReferenceError: arguments is not defined

// use of constructor in normal function
function Person(name) {
    this.name = name;
}
const john = new Person('John');
console.log(john.name); // Output: John


// use of constructor in arrow function
const Animal = (name) => {
    this.name = name;
};
// const dog = new Animal('Dog'); // Uncaught TypeError: Animal is not a constructor


// prototype in normal function
function Car(make) {
    this.make = make;
}   
Car.prototype.getMake = function() {
    return this.make;
};
const myCar = new Car('Toyota');
console.log(myCar.getMake()); // Output: Toyota


// prototype in arrow function
const Bike = (make) => {
    this.make = make;
};
// Bike.prototype.getMake = function() { // Uncaught TypeError: Cannot set properties of undefined (setting 'getMake')
//     return this.make;
// };
// const myBike = new Bike('Yamaha');
// console.log(myBike.getMake()); // Uncaught TypeError: myBike.getMake is not a function\