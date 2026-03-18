// Function to calculate total price
function calculateTotal(quantity, pricePerKg) {
    return quantity * pricePerKg;
}

// Class for Fruit
function Fruit(name, quantity, pricePerKg) {
    this.name = name;
    this.quantity = quantity;
    this.pricePerKg = pricePerKg;

    this.display = function() {
        const total = calculateTotal(this.quantity, this.pricePerKg);
        const status = this.quantity < 5 ? "Low Stock" : "Stock OK";

        // Manual spacing for table-like output
        let nameStr = (this.name + "          ").substring(0, 10);
        let qtyStr = (this.quantity + "    ").substring(0, 4);
        let priceStr = (this.pricePerKg + "    ").substring(0, 5);
        let totalStr = (total + "     ").substring(0, 6);

        console.log(nameStr + " | " + qtyStr + " | " + priceStr + " | " + totalStr + " | " + status);
    };
}

// Fruit objects
let f1 = new Fruit("Apple", 10, 150);
let f2 = new Fruit("Banana", 3, 50);
let f3 = new Fruit("Mango", 7, 200);
let f4 = new Fruit("Orange", 2, 80);

let fruits = [f1, f2, f3, f4];

// Helper function to print header
function printHeader(loopName) {
    console.log("\n---- " + loopName + " ----");
    console.log("Fruit      | Qty  | Price | Total  | Status");
    console.log("---------- | ---- | ----- | ------ | --------");
}

// ----- For loop -----
printHeader("For loop");
for (let i = 0; i < fruits.length; i++) {
    fruits[i].display();
}

// ----- While loop -----
printHeader("While loop");
let i = 0;
while (i < fruits.length) {
    fruits[i].display();
    i++;
}

// ----- Do-While loop -----
printHeader("Do-While loop");
let j = 0;
do {
    fruits[j].display();
    j++;
} while (j < fruits.length);

// ----- For-of loop -----
printHeader("For-of loop");
for (let fruit of fruits) {
    fruit.display();
}