function calculateDiscount(price, discount) {
    return price - (price * discount / 100);
}
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.display = function (finalPrice) {
        console.log("Product: ".concat(this.name, " | Original Price: ").concat(this.price, " | Final Price: ").concat(finalPrice));
    };
    return Product;
}());
// Objects
var prod1 = new Product("Laptop", 50000);
var prod2 = new Product("Phone", 20000);
var prod3 = new Product("Headphones", 5000);
var products = [prod1, prod2, prod3];
console.log("---- For loop ----");
for (var i_1 = 0; i_1 < products.length; i_1++) {
    var price = calculateDiscount(products[i_1].price, 10);
    products[i_1].display(price);
}
console.log("---- While loop ----");
var i = 0;
while (i < products.length) {
    var price = calculateDiscount(products[i].price, 10);
    products[i].display(price);
    i++;
}
console.log("---- Do-While loop ----");
var j = 0;
do {
    var price = calculateDiscount(products[j].price, 10);
    products[j].display(price);
    j++;
} while (j < products.length);
console.log("---- For loop ----");
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var prod = products_1[_i];
    var price = calculateDiscount(prod.price, 10);
    prod.display(price);
}
