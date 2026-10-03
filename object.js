/*Objects are variables that can store both values and functions.
Values are stored as key:value pairs called properties.
Functions are stored as key:function() pairs called methods.
// Create an Object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
empty object 
// Create an Object
const person = {};
// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

$ access object properties 
objectName.propertyName      --> person.firstName;
objectName["propertyName"]   -->person["firstName"];
//objectName[expression]
let age = person[x];
dot notation is preferred for readability and simplicity.

const person = {
  firstName: "John",
  lastName : "Doe",
  age      : 50,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

the delete keyword deletes a property from an object:
deletes both the value and the property.

Use the in operator to check if a property exists in an object:
const person = {
  firstName: "John",
  lastName: "Doe"
};
let result = ("firstName" in person);

In an object method, this refers to the object.
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getId: function() {
    return this.id;
  }
};
let number = person.getId();

Syntax
objectName.methodName()
If you call a method with parentheses, it will execute as a function:
Example    --> name = person.fullName();
adding js method
person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};
Methods are functions stored as object properties
Call a method with parentheses: person.fullName()
In methods, this refers to the object
You can add methods to objects by assigning a function to a property

The this keyword makes it possible to use the same method with different objects.
n an object method, this refers to the object
this lets methods access object properties
Used alone, this refers to the global object

Object Display
Object.values() creates an array from the property values:// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
// Create an Array
const myArray = Object.values(person);
// Stringify the Array
let text = myArray.toString();

stringify()Object.entries() makes it simple to use objects in loops:
JavaScript objects can be converted to a string with JSON method JSON. JSON.stringify().

we can use new Person() to create many new Person objects:const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");

The new property will be added to myFather. Not to any other Person Objects. means only add in present object not in new other.

Use object literals {} instead of new Object().
Use array literals [] instead of new Array().
Use pattern literals /()/ instead of new RegExp().
Use function expressions () {} instead of new Function().






*/