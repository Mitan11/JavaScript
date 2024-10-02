// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {

    make = null;
    model = null;
    year = null;

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    vehicleDetails() {
        console.log(`${this.make}`);
        console.log(`${this.model}`);
        console.log(`${this.year}`);
        console.log("-------------------");
    }

}

class Car extends Vehicle {

    doors = null;

    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    vehicleDetails() {
        super.vehicleDetails();
        console.log(`Doors: ${this.doors}`);
        console.log("-------------------");
    }

}

let c = new Car("Rolls-Royce", "Phantom", 2022, 4);
c.vehicleDetails();