// Functions
// Syntax - function functionName(parameters) {}
// Can also set default values : parametes = default;
function addNumbers(num1 = 1, num2 = 1) {
    return num1 + num2;
}
console.log(addNumbers(5, 8));


// Arrow functions
// Syntax - datatype functionName = (parameters) => {}
const addNumber = (num1 = 1, num2 = 1) => {
    return num1 + num2;
}
console.log(addNumber(7, 12));


// if there is only one command inside arrow function we can avoid the curly braces
// Don't even need the return keyword if only one statement
const addNumber2 = (num1 = 1, num2 = 1) =>  num1 + num2;
console.log(addNumber2(24, 12));

// if only one parameter we dont even need the parenthesis
const addNumber3 = num1 => num1 + 10;
console.log(addNumber3(5));