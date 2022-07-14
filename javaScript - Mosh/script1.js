console.log("Hello World");

// Declaring a variable
let firstName;
firstName = "Deveesh"
console.log(firstName);

// Declaring multiple variables
let maximum = 50, minimum = -50;
// OR
let maximumOfAll = 400;
let minimumOfAll = -100;

let rate = 2.3;
rate = 8;
console.log("It has changed to", rate);

// Constants
const newRate = 6.4;
console.log("New rate is " + newRate);

// Primitive DataTypes - String, number, boolean, undefined, null
let name = "Deveesh" //String liternal
let age = 18 // Number literal
let isApproved = false // Boolean literal
let number = undefined; // By default if not initialized
let selectedColor = null; // Explicitly clear the value of variable

// Reference types - objects, arrays, functions
// Object: 
let person = {
    // key: value
    personName: "Deveesh",
    personAge: 18
};
console.log(person);

// Change the object values
// Dot notation - object.key = "value"
person.personName = "Deveesh Shetty";
console.log(person);

// Bracket notation - object["key"] = value;
person["personAge"] = 19;
console.log(person);

// Brackets are useful for dynamic interactions

let selection = "personName";
person[selection] = "Deveesh C Shetty"
console.log(person);


// Arrays
let selectedColors = [];  // Empty Array
selectedColors = ["red", "blue"];
selectedColors[2] = "green";  // Array numbers is dynamic and can different datatypes.
selectedColors[3] = 45;
console.log(selectedColors);

console.log(selectedColors[0]); // log specified array elements.

// Array is an object here.
console.log("There are " + selectedColors.length + " elements in selectedColors array");


// Functions
function greet(name) {  // Declaring the function
    console.log("Hello " + name + " from inside a function");
}
// The above name variable is only limited to the function
greet("Deveesh");    // Calling the function
// Here name is the parameter of the function
// And Deveesh is the argument to the function.

greet("Gowrish")

function greetAgain(name, lastName) {
    console.log("Your name is", name, lastName);
}
greetAgain("Deveesh", "Shetty");


function square(number) {
    return number * number;
}

let squaredNumber = square(5);
console.log(squaredNumber);
// OR
console.log(square(8));