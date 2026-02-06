// What is this keyword (basic)?

// In JavaScript, this is a special keyword that refers to the object that is currently calling the function.

// Example 1: Global context
console.log(this); // In a browser, this refers to the window object. In Node.js, it refers to the global object.

// Example 2: Function context
function showThis() {
    console.log(this);
}
showThis(); // In a browser, this refers to the window object. In Node.js, it refers to the global object.

// Example 3: Object method context
const person = {
    name: 'John',
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person.greet(); // Output: Hello, my name is John

// Example 4: Constructor function context
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person('John', 30);
console.log(person1.name); // Output: John

/////////////////////////////////////////////////////////////////
const user = {
    name: "Yogesh",
    greet: () => {
        console.log(this.name);
    }
};
user.greet(); // undefined


const user1 = {
    name: "Yogesh",
    greet() {
        console.log(this.name);
    }
};
user1.greet(); // Yogesh

////////////////////////////////////////////////////////////////////////////
// note: this refers to the object that calls the function (except arrow functions).
// arrow functions do not have their own this.

// button.addEventListener("click", () => {
//     console.log(this);
// });

// button.addEventListener("click", function () {
//     console.log(this);
// });

////////////////////////////////////////////////////////////////////////////

// Trap #1: Method vs Function
const user2 = {
    name: "Yogesh",
    getName() {
        console.log(this.name);
    }
};

const fn = user2.getName;
fn();  // undefined
// fn() is called without the object
// this = window (or undefined in strict mode)
fn.call(user2); // Yogesh


//////////////////////////////////////////////////////////////////////////////////

// Trap #2: this inside setTimeout
// const user3 = {
//     name: "Yogesh",
//     greet() {
//         setTimeout(function () {
//             console.log(this.name);
//         }, 1000);
//     }
// };

// user3.greet(); // undefined
// Regular functon inside setTimeout
// this = window

// user3.greet.call(user3); // undefined
// greet = function () {
//     setTimeout(() => {
//         console.log(this.name);
//     }, 1000);
// }
// user3.greet(); // Yogesh

///////////////////////////////////////////////////////////////////////

// Trap #3: Arrow function as object method ❌
const user4 = {
    name: "Yogesh",
    greet: () => {
        console.log(this.name);
    }
};

user4.greet(); // undefined
// Arrow functions don’t have their own this

// greet() {
//   console.log(this.name);
// }


////////////////////////////////////////////////

// Trap #4: this in nested functions

// const user5 = {
//   name: "Yogesh",
//   greet() {
//     function inner() {
//       console.log(this.name);
//     }
//     inner();
//   }
// };

// user5.greet(); // undefined

//fix #1 Store this
// const user5 = {
//     name: "Yogesh",
//     greet() {
//         const self = this;
//         console.log(self);
//         function inner() {
//             console.log(self.name);
//         }
//         inner();
//     }
// };
// user5.greet(); // Yogesh

const user5 = {
    name: "Yogesh",
    greet() {
        // console.log(this);
        const inner = () => {
            console.log(this.name);
        };
        inner();
    }
};
user5.greet(); // Yogesh

/////////////////////////////////////////////////////////////

// Trap #5: this in event handler (arrow vs function)
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//     console.log(this); // button element
// });

// button.addEventListener("click", () => {
//     console.log(this); // global object (window in browser)
// });

////////////////////////////////////////////////////////////////

// Trap #6: this in constructor function

function User6(name) {
    this.name = name;
}

const u = User6("Yogesh");
console.log(u); // undefined
// Forgot new
// this points to window

const u1 = new User6("Yogesh");
console.log(u1); // User { name: 'Yogesh' }

////////////////////////////////////////////////////////

// Trap #7: this in class methods

class User8 {
    name = "Yogesh";
    greet() {
        console.log(this.name);
    }
}

const u8 = new User8();
const fn8 = u8.greet;
// fn8(); // undefined

// fix 

// #1
fn8.call(u8); // Yogesh

// #2
fn8.apply(u8); // Yogesh

// #3
fn8.bind(u8)(); // Yogesh

// #4
u8.greet(); // Yogesh

// #5
// greet = () => {
//     console.log(this.name);
// };

/////////////////////////////////////////////////////////

// Trap #8: call, apply, bind confusion

function greet(city) {
    console.log(this.name, city);
}

const user9 = { name: "Yogesh" };

greet.call(user9, "Delhi");
greet.apply(user9, ["Delhi"]);
const fn9 = greet.bind(user9);
fn9("Delhi");

// One-liner rule

// call → arguments separately
// apply → arguments as array
// bind → returns new function



// START
//   |
//   |-- Is the function an ARROW function?
//   |       |
//   |       |-- YES → `this` = lexical (from parent scope)
//   |       |
//   |       |-- NO
//   |
//   |-- Is the function called with `new`?
//   |       |
//   |       |-- YES → `this` = newly created object
//   |       |
//   |       |-- NO
//   |
//   |-- Is the function called with `call`, `apply`, or `bind`?
//   |       |
//   |       |-- YES → `this` = explicitly provided object
//   |       |
//   |       |-- NO
//   |
//   |-- Is the function called as an object method?
//   |       |   (object.method())
//   |       |
//   |       |-- YES → `this` = object before the dot
//   |       |
//   |       |-- NO
//   |
//   |-- Is it a DOM event handler (normal function)?
//   |       |
//   |       |-- YES → `this` = element that triggered the event
//   |       |
//   |       |-- NO
//   |
//   |-- DEFAULT
//           |
//           |-- Strict mode → `this` = undefined
//           |
//           |-- Non-strict → `this` = window






