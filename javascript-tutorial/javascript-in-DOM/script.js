// Selected things from the DOM

// console.log(window) <-- To find all the operations on window
// No read to write window. because it is main parent


// Single Element Selectors
const form = document.getElementById("my-form");
console.log(form);


// querySelector to select all types like class, ids, selectors etc.
// Use . or # also
const query = document.querySelector(".container");
console.log(query);



// Multiple Element Selectors
// Lists all the list with class .item
const listItems = document.querySelectorAll(".item");
console.log(listItems);

// to get class - older method
console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));

// querySelector, querySelectorAll <-- best method

// Traversing through all .items]
listItems.forEach((item) => console.log(item));


const ul = document.querySelector(".items");
// ul.remove();     // Remove all list items
// ul.lastElementChild.remove();   // Remove last list item


ul.firstElementChild.textContent = "Hello"  // Changes the text of first list item
ul.children[1].innerText = "Deveesh";   // Changes the second list item
ul.lastElementChild.innerHTML = "<h1>Hello</h1>"    // Add HTML dynamically using .innerHTML

const btn = document.querySelector(".btn");
btn.style.background = "red";   // Change CSS dynamically using .style


// Events 
// to create eventlistner
// .addEventListner(event, function(event parameter))
// event parameter - to run when event happens
btn.addEventListener("click", (e) => {
    e.preventDefault();     // As it is submit button this is used to prevent the deletion of console.log
    console.log("click");
    console.log(e.target)   // Shows where the event takes place can use .className or .id to get id or class
    document.querySelector("#my-form").style.background = "#ccc";
    document.querySelector("body").classList.add("bg-dark");    // Add a class to it
});