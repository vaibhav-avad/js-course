/*
Scope = Visibility
Global Scope
Variables declared Globally (outside any block or function) have Global Scope.
Global variables can be accessed from anywhere in a JavaScript program.
Variables declared with var, let and const are quite similar when declared outside a block.

Function Scope
All JavaScript functions have their own scope.
Variables defined inside a function are not accessible (visible) from outside the function.
Variables declared with var, let and const are quite similar when declared inside a function.

local Variables have Function Scope
They can only be accessed from within the function
No scripts or functions outside the function can access them
Variables with the same name can be used outside the function
Variables with the same name can be used in different functions
Local variables are created when a function starts
Local variables are deleted when the function is completed
Arguments (parameters) work as local variables inside functions

block scope
variables declared with let and const inside a code block are "block-scoped," meaning they are only accessible within that block.
This helps prevent unintended variable overwrites and promotes better code organization:















*/