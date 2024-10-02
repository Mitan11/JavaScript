// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.


class Person {

    name = null;
    age = null;
    country = null;

    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    details() {
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Country is ${this.country}`);
        console.log(`------------------------------`);
    }

}

let p1 = new Person("Mitan", 21, "India");
let p2 = new Person("Pranay", 21, "UAE");

p1.details();
p2.details();