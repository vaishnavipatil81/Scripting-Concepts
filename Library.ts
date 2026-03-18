// Function to calculate fine
function calculateFine(bookType, overdueDays) {
    let finePerDay;

    // Determine fine based on book type
    switch(bookType.toLowerCase()) {
        case "novel":
            finePerDay = 5;
            break;
        case "magazine":
            finePerDay = 2;
            break;
        case "research":
            finePerDay = 10;
            break;
        default:
            finePerDay = 3; // default fine
    }

    if (overdueDays <= 0) return 0; // no fine
    let totalFine = finePerDay * overdueDays;
    if (overdueDays > 30) totalFine += 50; // extra fine
    return totalFine;
}

// Class for Member
function Member(name, book, overdueDays) {
    this.name = name;
    this.book = book;
    this.overdueDays = overdueDays;

    this.displayFine = function() {
        const fine = calculateFine(this.book, this.overdueDays);

        // Manual padding
        let nameStr = this.name + "                ";
        nameStr = nameStr.substring(0, 12);

        let bookStr = this.book + "          ";
        bookStr = bookStr.substring(0, 10);

        let daysStr = (this.overdueDays + "   ").substring(0, 3);
        let fineStr = (fine + "     ").substring(0, 5);

        console.log(nameStr + " | " + bookStr + " | " + daysStr + " | " + fineStr);
    };
}

// Members
let mem1 = new Member("Vaishnavi", "Novel", 15);
let mem2 = new Member("Rahul", "Magazine", 40);
let mem3 = new Member("Siddhi", "Research", 0);
let mem4 = new Member("Sakshi", "Novel", 35);

let members = [mem1, mem2, mem3, mem4];

// Structured Output
console.log("----- Library Fine Report -----");
console.log("Member       | Book       | Days | Fine");
console.log("------------ | ---------- | ---- | ----");

for (let i = 0; i < members.length; i++) {
    members[i].displayFine();
}

// Example of control statement: show members with fines above 100
console.log("\nMembers with fines above 100:");
let j = 0;
while (j < members.length) {
    if (calculateFine(members[j].book, members[j].overdueDays) > 100) {
        console.log("- " + members[j].name);
    }
    j++;
}