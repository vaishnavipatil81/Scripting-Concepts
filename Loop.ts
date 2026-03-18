// Function to calculate discounted price
function calculateDiscount(price: number, discount: number): number {
    return price - (price * discount / 100);
}

// Class
class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    display(finalPrice: number): void {
        console.log(
            `${this.name.padEnd(15)} | ${this.price.toString().padEnd(10)} | ${finalPrice.toString().padEnd(10)}`
        );
    }
}

// Objects
let prod1 = new Product("Laptop", 50000);
let prod2 = new Product("Phone", 20000);
let prod3 = new Product("Headphones", 5000);
let products: Product[] = [prod1, prod2, prod3];

// Function to print header
function printHeader(loopType: string) {
    console.log(`\n---- ${loopType} ----`);
    console.log(`Product         | Original   | Final`);
    console.log(`----------------|-----------|----------`);
}

// ---- For loop ----
printHeader("For loop");
for (let i = 0; i < products.length; i++) {
    let price = calculateDiscount(products[i].price, 10);
    products[i].display(price);
}

// ---- While loop ----
printHeader("While loop");
let i = 0;
while (i < products.length) {
    let price = calculateDiscount(products[i].price, 10);
    products[i].display(price);
    i++;
}

// ---- Do-While loop ----
printHeader("Do-While loop");
let j = 0;
do {
    let price = calculateDiscount(products[j].price, 10);
    products[j].display(price);
    j++;
} while (j < products.length);

// ---- For…of loop ----
printHeader("For…of loop");
for (let prod of products) {
    let price = calculateDiscount(prod.price, 10);
    prod.display(price);
}