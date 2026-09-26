/*function sayHello() {
  return "Hello World";
}
let message = sayHello();
console.log(sayHello());

function multiply(a, b) {
  return a * b;                   //a,b are parameter
}
let result = multiply(4, 5);      //4,5 are arguments

Parameters are the names listed in the function definition.
Arguments are the real values passed to, and received by the function.
JavaScript function definitions do not specify data types for parameters.
JavaScript functions do not perform type checking on the arguments.
JavaScript functions do not check the number of arguments received.

function multiply(a, b) {
  return "Done";
  // Next line will never run
  return a * b;
}
let result = multiply(4, 3);

function checkAge(age) {
  if (age < 18) {
    return "Too young";
  }
  return "Access granted";
}

Function Rest Parameter
The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
Example
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

A function expression is a function stored in a variable.
// Standard Function
function multiply(a, b) {
  return a * b;
}

// Function Expression
const multiply = function(a, b) {
  return a * b;
};
const multiply = function (a, b) {return a * b};

const multiply = function (a, b) {return a * b};
Function Expressions Use Semicolons
function declaration 
function add(a, b) {return a + b;}
function expression
const add = function(a, b) {return a + b;};

Use function declarations for general-purpose functions
Use function expressions when assigning functions to variables
Use function expressions in callbacks and event handlers

An arrow function uses the => symbol.
An arrow function is always written as a function expression.
Example
const add = (a, b) => {
  return a + b;
};

const multiply = function(a, b) {return a * b}
const multiply = (a, b) => a * b;




*/