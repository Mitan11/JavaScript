// Write a JavaScript program that creates a class Book with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book {

    title = null;
    author = null;
    publicationYear = null;

    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    displayDetails() {
        console.log(`Title : ${this.title}`);
        console.log(`Author : ${this.author}`);
        console.log(`Publication Year : ${this.publicationYear}`);
    }
}

class EBook extends Book {

    bookPrice = null;

    constructor(title, author, publicationYear, bookPrice) {
        super(title, author, publicationYear);
        this.bookPrice = bookPrice;
    }

    displayDetails() {
        super.displayDetails();
        console.log(`Book Price : ${this.bookPrice}`);
    }

}

let ebook = new EBook("The Catcher in the Rye", "J.D. Salinger", 1951, 12.99);

ebook.displayDetails();
