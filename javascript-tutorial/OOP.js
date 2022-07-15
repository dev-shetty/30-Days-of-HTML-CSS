// Object oriented programming
// Creating Constructor
// Constructor functionName should start with capital letter
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);   // Date constructor

    // Methods (which are basically functions) to object
    // this.getBirthYear = function() {
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function() {
    //     return `${this.firstName} ${this.lastName}`;
    // }
}

// Prototypes - to avoid functions inside the constructor in console
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate an object
const person1 = new Person("Deveesh", "Shetty", "12-09-2003");
const person2 = new Person("Gowrish", "Shetty", "06-08-2009");
console.log(person1);
console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person1.getFullName());


// Class
// This example is same as above but simpler and easier
// method is function inside of a class
class PersonClass {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob); 
    }

    // Same as .prototype but simpler here
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const personCls1 = new PersonClass("Deveesh", "Shetty", "12-09-2003");
const personCls2 = new PersonClass("Gowrish", "Shetty", "06-08-2009");
console.log(personCls1);
console.log(personCls2.dob.getFullYear());

console.log(personCls1.getBirthYear());
console.log(personCls2.getFullName());


