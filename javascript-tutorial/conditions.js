// Conditions
const x = 10;
const y = 20;
const z = 30;

// if condition
// == <-- does not match the datatype just the values
// === <-- also matches the datatypes
if(x == 10) {
    console.log("x is 10");
}

// if else
if(y === 10) {
    console.log("Yeah it is 10");
} else {
    console.log("It is not 10");
}

// if else ladder
if(z === 10) {
    console.log("Yeah it is 10");
} else if(z === 20) {
    console.log("It is 20");
} else if(z === 30) {
    console.log("It is 30!!!");
} else {
    console.log("It is not 10");
}

// can also use && <-- AND, || <-- OR


// Ternary operator (shorthand if condtition)
const a = 12;
const color = a > 10 ? "red" : "blue";
// It says if a > 10 then color = red else color = blue
console.log(color);


// Switches
switch(color) {
    case 'red': 
        console.log("The color is red");
        break;
    case "blue": 
        console.log("The color is blue");
        break;
    default: 
        console.log("The color is not red or blue");
        break;
}