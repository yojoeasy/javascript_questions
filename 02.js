// Q2 Difference between JavaScript and Java?

// JavaScript and Java are two distinct programming languages with different purposes, designs, and use cases. Here are some key differences between them:

// 1. Purpose:
//    - JavaScript: Primarily used for web development to create interactive and dynamic web pages. It runs in web browsers and is also used on the server-side with environments like Node.js.
//    - Java: A general-purpose programming language used for building standalone applications, enterprise-level applications, mobile applications (especially Android apps), and large systems.

// 2. Syntax:
//    - JavaScript: Has a syntax that is more flexible and dynamic, allowing for functions to be treated as first-class citizens. It supports prototype-based inheritance.
//    - Java: Has a more rigid and statically-typed syntax, requiring explicit declarations of data types. It follows class-based inheritance.         

// 3. Execution Environment:
//    - JavaScript: Primarily executed in web browsers, but can also run on servers using Node.js.
//    - Java: Runs on the Java Virtual Machine (JVM), which allows Java applications to be platform-independent.

// 4. Compilation:
//    - JavaScript: Interpreted language, although modern engines use Just-In-Time (JIT) compilation for performance optimization.
//    - Java: Compiled language, where source code is compiled into bytecode that runs on the JVM.

// 5. Concurrency:
//    - JavaScript: Uses an event-driven, non-blocking I/O model with a single-threaded event loop for handling concurrency.
//    - Java: Supports multi-threading, allowing multiple threads to run concurrently within a program.    
   
// 6. Use Cases:
//    - JavaScript: Web development, server-side development with Node.js, mobile app development with frameworks like React Native, game development, and desktop applications with Electron.
//    - Java: Enterprise applications, Android app development, web applications using frameworks like Spring, scientific computing, and large-scale systems.

// Overall, while both JavaScript and Java share similar names, they serve different purposes and are used in different contexts within the programming world.




// Q2 difference between prototype-based inheritance and class-based inheritance?
// Prototype-based inheritance and class-based inheritance are two different approaches to achieving inheritance in object-oriented programming. Here are the key differences between them:

// 1. Definition:
//    - Prototype-based Inheritance: In this model, objects inherit directly from other objects. Each object has a prototype (another object) from which it can inherit properties and methods.
//    - Class-based Inheritance: In this model, classes are blueprints for creating objects. Objects are instances of classes, and inheritance is achieved by creating subclasses that extend parent classes.   
// 2. Structure:
//    - Prototype-based Inheritance: There are no classes; instead, objects are created and linked to other objects through prototypes.
//    - Class-based Inheritance: Classes define the structure and behavior of objects, and inheritance is established through class hierarchies.

// 3. Flexibility:
//    - Prototype-based Inheritance: More flexible, as objects can be modified at runtime, and new properties or methods can be added to prototypes dynamically.
//    - Class-based Inheritance: More rigid, as the structure is defined by classes, and changes typically require modifying the class definition.

// 4. Syntax:
//    - Prototype-based Inheritance: Often uses functions and object literals to create objects and set up inheritance (e.g., using Object.create() in JavaScript).
//    - Class-based Inheritance: Uses class declarations and keywords like "extends" to define subclasses (e.g., in Java, C++, Python).
// 5. Examples:
//    - Prototype-based Inheritance: JavaScript is a prime example of a language that uses prototype-based inheritance.
//    - Class-based Inheritance: Languages like Java, C++, and Python primarily use class-based inheritance.    
// 6. Memory Usage:
//    - Prototype-based Inheritance: Can be more memory efficient, as objects share properties and methods through prototypes.
//    - Class-based Inheritance: Each class may have its own copy of properties and methods, which can lead to higher memory usage in some cases.   
// Overall, prototype-based inheritance offers more flexibility and dynamic behavior, while class-based inheritance provides a more structured and formal approach to defining object relationships.