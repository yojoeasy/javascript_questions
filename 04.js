// Difference between var, let, and const?
// In JavaScript, `var`, `let`, and `const` are used to declare variables, but they have different characteristics and scopes:

// 1. `var`:
//    - Function-scoped: Variables declared with `var` are scoped to the function in which they are declared, or globally if declared outside a function.
//    - Hoisting: Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.
//    - Can be re-declared and updated. 

// 2. `let`:
//    - Block-scoped: Variables declared with `let` are scoped to the block (enclosed by `{}`) in which they are declared.
//    - Hoisting: Variables declared with `let` are hoisted but not initialized, leading to a "temporal dead zone" until the declaration is encountered.
//    - Can be updated but not re-declared within the same scope. 

// 3. `const`:
//     - Block-scoped: Like `let`, `const` is also block-scoped.   
//     - Hoisting: Variables declared with `const` are hoisted but not initialized, similar to `let`.
//     - Cannot be updated or re-declared. The value must be assigned at the time of declaration. However, if the value is an object or array, the contents can be modified.

// Example:        

function example() {
    if (true) { 
        var x = 10; // function-scoped
        let y = 20; // block-scoped
        const z = 30; // block-scoped
        console.log(x); // 10
        console.log(y); // 20
        console.log(z); // 30
    }
    console.log(x); // 10 (accessible)
    // console.log(y); // Error: y is not defined
    // console.log(z); // Error: z is not defined
}
example();
// In summary, use `var` for function-scoped variables, `let` for block-scoped variables that may change, and `const` for block-scoped variables that should not be reassigned.
