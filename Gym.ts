function calculateFee(age, membership) {
    let fee;

    if (age < 16) {
        return "Not Eligible";
    } else if (age >= 60) {
        fee = 0.8; 
    } else {
        fee = 1; 
    }

    switch(membership.toLowerCase()) {
        case "basic":
            return 100 * fee;
        case "premium":
            return 200 * fee;
        case "vip":
            return 300 * fee;
        default:
            return 150 * fee;
    }
}

function Member(name, age, membership) {
    this.name = name;
    this.age = age;
    this.membership = membership;

    this.display = function() {
        const fee = calculateFee(this.age, this.membership);
        let status = typeof fee === "string" ? fee : "Eligible";
        let feeStr = typeof fee === "string" ? "-" : fee.toFixed(2);
        console.log(
            this.name.padEnd(10) + " | " + this.age.toString().padEnd(3) + " | " + this.membership.padEnd(7) + " | " + status.padEnd(12) + " | " + feeStr
        );
    };
}

let m1 = new Member("Vaishnavi", 15, "VIP");
let m2 = new Member("Rahul", 12, "Basic");
let m3 = new Member("Siddhi", 65, "Premium");
let m4 = new Member("Sakshi", 30, "Basic");

let members = [m1, m2, m3, m4];

console.log("Name       | Age | Membership | Status       | Fee");
console.log("---------- | --- | --------- | ------------ | ----");

for (let i = 0; i < members.length; i++) {
    members[i].display();
}