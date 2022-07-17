// ADD EVENTLISTNERS

// ideal way of doing instead of using onclick in HTML
let button = document.getElementById("button").addEventListener("click", buttonClick);

function buttonClick(event) {   // event <-- is an event parameter
    // console.log("Button clicked");
    // document.getElementById("header-title").textContent = "You Clicked";
    // document.querySelector("#main").style.backgroundColor = "limegreen"
    return null; // Just to terminate everything


    // console.log(event); <-- shows all the events
    console.log(event.target); // shows the target where the event took place
    console.log(event.target.id);   // Shows the id of the target
    console.log(event.target.className);    // Shows the classname of the target
    console.log(event.target.classList);    // Gives array of the classes

    let output = document.getElementById("output");
    output.innerHTML = "<h3>" + event.target.className + "</h3>"

    console.log(event.type);    // Tells what type of event happened

    console.log(event.clientX); // Position of X mouse where the button was clicked from the browser window
    console.log(event.clientY); // Position Y


    // To get position from the inside of the element instead of the browser the
    console.log(event.offsetX);
    console.log(event.offsetY);


    // NOTE CLIENT IS W.R.TO WINDOW WHILE OFFSET IS W.R.TO THE ELEMENT

    console.log(event.altKey);  // Check whether while clicking is the user pressing the alt key
    console.log(event.ctrlKey); // for CTRL
    console.log(event.shiftKey); // for shift
}

let output = document.getElementById("output");

// MOUSE EVENTS
let buttonNew = document.getElementById("button");

buttonNew.addEventListener("click", runEvent);  // Single click

// buttonNew.addEventListener("dblclick", runEvent); // Double Click

// buttonNew.addEventListener("mousedown", runEvent); // as soon as the mouse goes down it fires before clicking it

// buttonNew.addEventListener("mouseup", runEvent); // as soon as the mouse goes down it fires


function runEvent(event) {
    console.log("EVENT TYPE: ", event.type);
    // event.preventDefault(); // To avoid the submit button disappear in console

    // document.body.style.display = "none"    // everything go blank when user fires event just for fun

    // console.log(event.target.value);
    // output.innerHTML = `<h3>${event.target.value}</h3>`    // logs what we are typing

    
    // output.innerHTML = "<h3>Mouse X: " + event.offsetX + "</h3><h3>Mouse Y: " + event.offsetY  + "</h3>"

    // document.body.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, 40)`;    // Change the background color of body w.r.to the offsets so its wiggling
}

// Other events
let box = document.getElementById("box");

box.addEventListener("mouseenter", runEvent);   // When the cursor enters the box it fires

// box.addEventListener("mouseleave", runEvent);   // When the cursor leaves the box it fires

// box.addEventListener("mouseover", runEvent);   // Same as mouseenter but works for the child evements too

// box.addEventListener("mouseout", runEvent);   // Same as mouseleave but works for the child evements too

box.addEventListener("mousemove", runEvent) // when the cursor is moving inside the element


let itemInput = document.querySelector("input[type=text]");
let form = document.querySelector("form");

// itemInput.addEventListener("keydown", runEvent);    // Fires when any key is pressed and not released

// itemInput.addEventListener("keyup", runEvent);    // Fires when any key is released

itemInput.addEventListener("keypress", runEvent);    // Fires when any key is just when the key pressed


// itemInput.addEventListener("focus", runEvent);    // Fires when we just click inside the element inshort if we focus on it


// itemInput.addEventListener("blur", runEvent);    // Fires when we click somewhere else than the element..... inshort get out of focus


// itemInput.addEventListener("cut", runEvent);    // Shows when someone uses cut


// itemInput.addEventListener("paste", runEvent);    // Shows when someone uses paste


// itemInput.addEventListener("input", runEvent);    // When we input something

let select = document.querySelector("select");

select.addEventListener("change", runEvent);    // Fires whenever we change something here in the select list

form.addEventListener("submit", runEvent);  // Submit to the page but it is really fast so we should prevent default to see it