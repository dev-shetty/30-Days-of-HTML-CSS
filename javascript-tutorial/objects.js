// ##### Object literals #####

const person = {
    firstName: "Deveesh",
    lastName: "Shetty",
    age: 30,
    hobbies: ["coding", "reading", "music"],    // Array within object
    address: {      // object within an object
        street: "R.T.O Road",
        city: "Puttur",
        state: "Karnataka"
    }
}
console.log(person);

// To access single value
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);     // Printing the array element
console.log(person.address.city);   // Printing the inside object element

// Destructuring an object into variable
const {firstName, lastName, address: { city }} = person;   // Pulling the variables out of person object
console.log(firstName, city);   // Also shown how to pull out embedded objects


// Add properties
person.email = "deveeshshetty@gmail.com";
console.log(person);
