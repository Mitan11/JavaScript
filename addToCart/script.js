let cartTotal = 0;
let cartItems = [];
let Product = {
    product1: { productName: "Product1", productDescription: "ABC", productPrice: "$10", productId: "1" },
    product2: { productName: "Product2", productDescription: "EFG", productPrice: "$20", productId: "2" },
    product3: { productName: "Product3", productDescription: "HIJ", productPrice: "$30", productId: "3" },
    product4: { productName: "Product4", productDescription: "LMN", productPrice: "$40", productId: "4" },
}

localStorage.setItem("Product", JSON.stringify(Product));


let cardContainer = document.getElementById("card-container");

for (const key in Product) {
    const product = Product[key];

    let card = `
    <div class="col-md-4 mb-4" id="${key}">
        <div class="card">
            <img src="" class="card-img-top" alt="${product.productName}">
            <div class="card-body">
            <h5 class="card-title">${product.productName}</h5>
            <p class="card-text">${product.productDescription}</p>
            <p class="card-text"><strong>Price: ${product.productPrice}</strong></p>
            <button id="${key}" class="add-product btn btn-primary">Add to Cart</button>
            </div>
        </div>
    </div>
    `;

    cardContainer.innerHTML += card;
}

let add = document.querySelectorAll('.add-product');

add.forEach(element => {
    element.addEventListener('click', (e) => {
        let product = e.srcElement.id;
        cartItems.push(product);
        document.getElementById("pcount").innerText = ++cartTotal;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    });
});


function addToCart(product) {
    let cartContainer = document.getElementById("cart-container");
    let cartCard = `
    <div class="col-md-4 mb-4" id="${product}">
        <div class="card">
            <img src="" class="card-img-top" alt="${Product[product].productName}">
            <div class="card-body">
                <h5 class="card-title">${Product[product].productName}</h5>
                <p class="card-text">${Product[product].productDescription}</p>
                <p class="card-text"><strong>Price: ${Product[product].productPrice}</strong></p>
                <button id="${product}" class="add-product btn btn-primary">Add to Cart</button>
            </div>
        </div>
    </div>
    `

    cartItems.push(cartCard);
    // cartContainer.innerHTML += cartCard;
}
