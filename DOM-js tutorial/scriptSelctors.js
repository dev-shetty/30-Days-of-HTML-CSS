// console.dir(document);  // Shows all the stuffs we can do in document

console.log(document.domain);   // Shows the domain of our website
// Here its 127.0.0.1

console.log(document.URL);   // Shows entire page URL

console.log(document.title);    // Shows the title of the document

// To set title
// document.title = 123;

console.log(document.doctype);   // Sees the doctype of the file here 

console.log(document.head);     // Shows whats in <head> tag

console.log(document.body);     // Shows whats in <body> tag

// console.log(document.all);      // Shows everything thats in DOM it is an array

console.log(document.all[10]);      // Gets the 11th element

// document.all[10].textContent = "Hello"


console.log(document.forms);        // Get all the forms

console.log(document.links);        // Get all the links

console.log(document.images);       // Get all the images


// GETELEMENTBYID
// console.log(document.getElementById("header-title"));   // Get element by id
let headerTitle = document.getElementById("header-title");

headerTitle.textContent = "Hello";  // Also takes whitespaces and shows hidden elements too.
headerTitle.innerText = "Good Morning";

headerTitle.innerHTML = "<strong>Deveesh</strong>";  // Puts the HTML inside the DOM element


// Style Changes
let header = document.getElementById("main-header");
header.style.borderBottom = "10px solid red";


// GETELEMENTSBYCLASSNAME
let items = document.getElementsByClassName("list-group-item");

items[1].textContent = "Hello Classname";   // Changes the second item
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "Yellow";

// items.style.backgroundColor = "#f4f4f4";    // Doesnt work for all elements as it is an array - gives error

// To make it happen we have to loop through the array
// for(let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = "#f4f4f4";
// }


// GETELEMENTSBYTAGNAME

let li = document.getElementsByTagName("li"); // Grab all the lis

li[2].textContent = "Hello Tagname"    // Changes the second item
li[2].style.fontWeight = "bold";
li[2].style.backgroundColor = "Orange";


// QUERYSELECTOR - for only 1 item...if more then will grab the first one
// Works for all selectors but use the prefix
// Can use CSS pseudo classes also

let Header = document.querySelector("#main-header");
Header.style.borderTop = "5px solid royalblue";

let input = document.querySelector("input");
input.value = "Hello World";

let submit = document.querySelector("input[type='submit']");    // Like CSS
submit.value = "SEND";

let item = document.querySelector(".list-group-item");
item.style.color = "red";   // Gets the first one

let lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "limegreen";

let secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "gray";


// QUERYSELECTORALL - grabs all the things with similar selectors

let titles = document.querySelectorAll(".title");
titles[0].textContent = "querySelector FTW";

let odd = document.querySelectorAll("li:nth-child(odd)");   // Grabbing all the odd ones

for(let i = 0; i < odd.length; i++){
    odd[i].style.fontSize = "2em";  // Changes font size for only odd childs
}

