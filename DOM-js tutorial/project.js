let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);

// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItem);

function addItem(event) {
    event.preventDefault();

    // Get input value
    let newItem = document.getElementById("item").value;

    // Create new li element
    let li = document.createElement("li");
    // Add a class name
    li.className = "list-group-item";
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create the delete button
    let delButton = document.createElement("button");

    // Add class to delete button

    let deleteButton = document.querySelector(".delete");

    // Taking the class name from the previous class so we can send to the new one
    let delClasses = deleteButton.className

    // Assigning the classes to the new button
    delButton.className = delClasses;

    // Adding text to the button
    delButton.textContent = "X";
    // console.log(delButton.className);

    // Appending the button and the li
    li.appendChild(delButton)
    itemList.appendChild(li);

    // Making the textbox empty after submiting
    document.getElementById("item").value = " ";
}

function removeItem(event) {
    if(event.target.classList.contains("delete")) {  // Only fire when button with class delete is pressed
        console.log(1);
        if(confirm("Are you sure? ")) { // Confirmation message
            let li = event.target.parentElement;
            itemList.removeChild(li);   // to remove the child li
        }
    }
}

function filterItem(event) {
    // converts to lowercase
    let text = event.target.value.toLowerCase();
    
    // Get all the li's
    let items = itemList.getElementsByTagName("li");

    // Converting HTML collection to array
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
        
    });

}