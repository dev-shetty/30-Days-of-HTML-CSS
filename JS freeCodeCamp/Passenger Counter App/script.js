// To get the h2 tag which has id of counter-element and change its value
// document.getElementById("counter-element").innerText = 5;

let counter = document.getElementById("counter-element");
console.log(counter)
count = 0;

function increment() {
    count = count + 1;
    console.log(count);
    counter.innerText = count;
}



