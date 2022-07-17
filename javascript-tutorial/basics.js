// Template String
let name = "Deveesh";
let age = 18;

console.log(`My name is ${name}, I am ${age}, years young!!`);

// String manipulation
const s = "Hello World";

// Print length
console.log(s.length);

// to uppercase
console.log(s.toUpperCase());

// to lowercase
console.log(s.toLowerCase());

// Substring
console.log(s.substring(0, 5));     // Uses first 5 letters only  

// Split as arrays
console.log(s.split(" "));  // Splits after space
console.log(s.split(""));  // Splits after each letter

// Creating an array
const numbers = new Array(1, 2, 3, 4, 5);   //Old method
console.log(numbers);

const fruits = ["apples", "oranges", "banana", 10, true];   // New method
// Also can have more than one datatype
console.log(fruits);

console.log(fruits[1]); // Second element
fruits[5] = "grapes";   // Adding elements
console.log(fruits[5]);

// add to last of array
fruits.push("mangoes");
console.log(fruits);

// add to the beginging
fruits.unshift("strawberries");
console.log(fruits);

// remove last element
fruits.pop();
console.log(fruits);


// To check if its an array or not
console.log(Array.isArray(fruits));

// To check index of 
console.log(fruits.indexOf("oranges"));


