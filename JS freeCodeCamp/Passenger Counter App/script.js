// To get the h2 tag which has id of counter-element and change its value
// document.getElementById("counter-element").innerText = 5;

let counter = document.getElementById("counter-element");   // Get the element of id: counter-element.
let saved = document.getElementById("saved-content")
count = 0;

function increment() {
    count = count + 1;
    counter.innerText = count; 
}


function save() {
    // saved.innerText = saved.innerText + count;
    let countStr = count + " - ";
    saved.textContent += countStr;
    // Using textContent because innerText doesnt show spaces after and only shows user-readable things.

    // Set the count element back to 0
    count = 0;
    counter.innerText = count;
}


