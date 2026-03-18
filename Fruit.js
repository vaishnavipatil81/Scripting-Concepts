// Function to calculate total price
function calculateTotal(quantity, pricePerKg) {
    return quantity * pricePerKg;
}
// Class for Fruit
function Fruit(name, quantity, pricePerKg) {
    this.name = name;
    this.quantity = quantity;
    this.pricePerKg = pricePerKg;
    this.display = function () {
        var total = calculateTotal(this.quantity, this.pricePerKg);
        var status = this.quantity < 5 ? "Low Stock" : "Stock OK";
        // Manual spacing for table-like output
        var nameStr = (this.name + "          ").substring(0, 10);
        var qtyStr = (this.quantity + "    ").substring(0, 4);
        var priceStr = (this.pricePerKg + "    ").substring(0, 5);
        var totalStr = (total + "     ").substring(0, 6);
        console.log(nameStr + " | " + qtyStr + " | " + priceStr + " | " + totalStr + " | " + status);
    };
}
// Fruit objects
var f1 = new Fruit("Apple", 10, 150);
var f2 = new Fruit("Banana", 3, 50);
var f3 = new Fruit("Mango", 7, 200);
var f4 = new Fruit("Orange", 2, 80);
var fruits = [f1, f2, f3, f4];
// Helper function to print header
function printHeader(loopName) {
    console.log("\n---- " + loopName + " ----");
    console.log("Fruit      | Qty  | Price | Total  | Status");
    console.log("---------- | ---- | ----- | ------ | --------");
}
// ----- For loop -----
printHeader("For loop");
for (var i_1 = 0; i_1 < fruits.length; i_1++) {
    fruits[i_1].display();
}
// ----- While loop -----
printHeader("While loop");
var i = 0;
while (i < fruits.length) {
    fruits[i].display();
    i++;
}
// ----- Do-While loop -----
printHeader("Do-While loop");
var j = 0;
do {
    fruits[j].display();
    j++;
} while (j < fruits.length);
// ----- For-of loop -----
printHeader("For-of loop");
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    fruit.display();
}
