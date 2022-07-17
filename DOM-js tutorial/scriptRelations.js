// TRAVERSING THE DOM

// PARENT NODES
let itemList = document.querySelector("#items");

console.log(itemList.parentNode);   // Shows the parent of the item
// itemList.parentNode.style.backgroundColor = "red";

console.log(itemList.parentNode.parentNode);    // Shows the parent of the parent

console.log(itemList.parentNode.parentNode.parentNode);    // Shows the parent of the parent of the parent


// PARENT ELEMENTS
console.log(itemList.parentElement);   // Shows the parent of the item
// itemList.parentElement.style.backgroundColor = "red";

console.log(itemList.parentElement.parentElement);    // Shows the parent of the parent

console.log(itemList.parentElement.parentElement.parentElement);    // Shows the parent of the parent of the parent

// parentNode and parent Element are same for the most part


// CHILD NODES
// console.log(itemList.childNodes);   // Shows the child of the element
// But it also shows blank space which isn't good - not used

// Altername method
console.log(itemList.children)  // Use this rather

console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";


// FIRSTCHILD
// console.log(itemList.firstChild);   // Shows textnode since there is a white space

console.log(itemList.firstElementChild);    // This is better as it avoids white space
itemList.firstElementChild.textContent = "Hello";

console.log(itemList.lastElementChild);    // This is better as it avoids white space
itemList.lastElementChild.textContent = "World";


// ALWAYS USE ELEMENT TAGS AS IT AVOIDS WHITESPACE


// SIBLINGS
// To get next sibling
console.log(itemList.nextElementSibling); 

// previous sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "orange";


// CREATE ELEMENTS

// create a div
let newDiv = document.createElement("div");
newDiv.className = "new-div"    // Add a class
newDiv.id = "div-new"       // Add a id
newDiv.setAttribute("title", "Hello Div");  // Add attributes

// Create a textNode to add content in it
let newDivText = document.createTextNode("Hello New Div");

newDiv.appendChild(newDivText); // Append text to the div

// To insert it into the DOM
let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1); // to insert before anything first parameter- the element which we have to insert.....second-parameter - the element before whom it has to be inserted

newDiv.style.fontSize = "2em";

console.log(newDiv);


