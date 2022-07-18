

let submit = document.getElementById("submit");
submit.addEventListener("click", BMI);

let result = document.querySelector(".result");

function BMI(event) {
    event.preventDefault();
    
    let weight = document.getElementById("weight");
    let height = document.getElementById("height");

    let BMI;
    let desc;
    BMI = (weight.value/(height.value*height.value))*100*100; // Converting cm to m;
    if(BMI > 25) {
        desc = "Over weight";
    } else if(BMI < 18.5) {
        desc = "Under weight";
    } else {
        desc = "Healthy";
    }
    if(BMI > 0) {
        result.innerHTML = "<h2>"+ BMI +"</h2><h3>" + desc + "</h3>";
    }
    document.getElementById("weight").value = " ";
    document.getElementById("height").value = " ";
}