//  Arrays of objects
const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "100 Days of Code",
        isCompleted: true
    },
    {
        id: 3,
        text: "Completed Notes",
        isCompleted: false
    },
];
console.log(todos);
console.log(todos[1].text); // Check Object inside the array

// Convert our array into JSON format
// To send data to the server
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// for loop
// 3 parameters seperated by semicolons -
//                  1) assignment of iterator
//                  2) Condition
//                  3) Increment of Decrement
for(let i = 0; i < 10; i++) {
    console.log(`For loop number ${i}`);
}


// while loop
let i = 0;
while(i<10) {
    console.log(`While loop number ${i}`);
    i++;
}


// Loop through arrays - not the best way
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);     // To get the text
}

// Another method - for of (similar to python syntax)
for(let todo of todos) {
    console.log(todo.isCompleted)
}


// High order array methods - best methods

// forEach - it takes a function and the function taks a variable which will address the array items (like i)
todos.forEach(function(todo) {
    console.log(todo.text);
});

// map - returns an array of what we want
// Here it returns an array of text values
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

// filter - to only created array of elements which satisfies some condition
// Here isCompleted should be true to get in the array

const todoDone = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {     // To just return the text instead of object
    return todo.text;       // Nesting of operations
}); 

console.log(todoDone);
