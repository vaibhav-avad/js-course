/*
const array_name = [item1, item2, ...];      
he JavaScript method toString() converts an array to a string
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
The length property of an array returns the length of an array 
The length property is always one more than the highest array index.

Accessing the Last Array Element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];

The easiest way to add a new element to an array is using the push() method:
Adding elements with high indexes can create undefined "holes" in an array.
Banana
Orange
Apple
undefined
undefined
undefined
Lemon

in JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes.
Arrays are a special kind of objects, with numbered indexes.
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.

JavaScript has a built-in array constructor new Array().
But you can safely use [] instead.
These two different statements both create a new empty array named points:
const points = new Array();
const points = [];




*/