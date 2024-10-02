// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {

    constructor(area) {
        this.area = area;
    }

    calculateArea() {
        console.log(`The area of this shape is ${this.area}`);
    }

}

class Circle extends Shape {

    constructor(radius) {
        super(Math.PI * radius * radius);
    }

    calculateArea() {
        console.log(`The area of circle is ${this.area}`);
    }

}

class Triangle extends Shape {
    
    constructor(base, height) {
        super(0.5 * base * height);
    }
    
    calculateArea() {
        console.log(`The area of triangle is ${this.area}`);
    }
}

let circle = new Circle(5);

circle.calculateArea();

let triangle = new Triangle(7, 8);

triangle.calculateArea();