// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {

    width = null;
    height = null;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    areaOfRectangle() {
        let area = this.height * this.width;
        console.log(`Area of Rectangle is ${area}`);
    }

    perimeterOfRectangle() {
        let perimeter = 2 * (this.height + this.width);
        console.log(`Perimeter of Rectangle is ${perimeter}`);
    }

}

let a1 = new Rectangle(12, 2);
a1.areaOfRectangle();
let a2 = new Rectangle(5, 10);
a2.perimeterOfRectangle();