/*
const array_name = [item1, item2, ...];      
The keyword const is a little misleading.
It does NOT define a constant array. It defines a constant reference to an array.

the JavaScript method toString() converts an array to a string
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

The new Array() constructor creates an Array object.
Syntax
new Array()
new Array(number)
new Array(element1, element2, ..., elementN)
Array()
Array(number)
Array(element1, element2, ..., elementN)

The Array creator function is smart.
It is programmed to check if you forgot the new keyword.
If you leave it out, it adds it behind the scene.

Use an array literal [ ] instead of the new Array() when possible.
new Array(number) is a special dangerous case.
new Array(3) creates an array with 3 empty elements; not an array containing the number 3.
Using [ ] is faster to type, easier to read, and avoids the "single number trap":
For example, [3] actually creates [3], not [null,null,null].

Basic Array Methods
Array length              The length property can also be used to set the length of an array:
Array toString()          method returns the elements of an array as a comma separated string.
Array at()                fruits.at(2); == fruits[2];
Array join()              method also joins all array elements into a string.
Array pop()               The pop() method removes the last element from an array:
Array push()              The push() method adds a new element to an array (at the end):  ALSO fruits[fruits.length] = "Kiwi"; last la aad hoil.
Array shift()             he shift() method removes the first array element and "shifts" all other elements to a lower index.
Array unshift()           The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
Array isArray()           Array.isArray(fruits);  ans in bool.
Array delete()            Using delete() leaves undefined holes in the array.Use pop() or shift() instead.  delete fruits[0];
Array concat()            The concat() method creates a new array by merging (concatenating) existing arrays:     c = a.concat(b); d = a.concat(b,c);
Array copyWithin()        copyWithin() copies array elements to another position in an array, overwriting existing values:
                          fruits.copyWithin(2, 0);  --> Copy to index 2, all elements from index 0:
Array flat()              The flat() method creates a new array with sub-array elements concatenated to a specified depth.[[1,2],[3,4],[5,6]];-->[1,2,3,4,5,6]
Array splice()            The splice() method adds new elements to an array, and returns an array with the deleted elements (if any):
                              Original Array: .splice(2, 2, "Lemon", "Kiwi");
                              Banana,Orange,Apple,Mango
                              New Array:
                              Banana,Orange,Lemon,Kiwi
                              Removed Items:
                              Apple,Mango
Array Slice()             const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];  --> const citrus = fruits.slice(1, 3);

Array Search Methods
Array indexOf()           array.indexOf(item, start)
Array lastIndexOf()
Array includes()          array.includes(search-item)
Array find()              method returns the value of the first array element that passes a test function.  (value, index, array)
Array findIndex()          
Array findLast()
Array findLastIndex()

Alphabetic Sort
Array sort()
Array reverse()
Array toSorted()          he difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged,
                           while the last method alters the original array.
Array toReversed()
Sorting Objects
Numeric Sort
Numeric Sort        const points = [40, 100, 1, 5, 25, 10];
                    points.sort(function(a, b){return a - b});     for descending --> {return b - a})  
Random Sort
Math.min()
Math.max()
Home made Min()
Home made Max()

*/