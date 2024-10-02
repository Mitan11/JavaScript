//Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.


class Product {
    
    productId = null;
    name = null;
    price = null;

    constructor(productId, name, price) {
        this.productId = productId;
        this.name = name;
        this.price = price;
    }


    calculateTotalPrice(quantity) {
        return this.price * quantity;
    }

}


class PersonalCareProduct extends Product {

    constructor(productId, name, price, warrantyPeriod) {
        super(productId, name, price);
        this.warrantyPeriod = warrantyPeriod;
    }


    calculateTotalPrice(quantity) {
        let totalPrice = super.calculateTotalPrice(quantity);
        console.log(`This product comes with a warranty period of ${this.warrantyPeriod} years.`);
        return totalPrice;
    }

}


const shampoo = new PersonalCareProduct(101, "Shampoo", 15, 2);


const totalPrice = shampoo.calculateTotalPrice(3);


console.log(`Total Price for 3 units: ${totalPrice}Rs`);
