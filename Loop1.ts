
function calculateAverage(marks: number[]): number {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

// Class
class Student {
    name: string;
    marks: number[];

    constructor(name: string, marks: number[]) {
        this.name = name;
        this.marks = marks;
    }

    display(): void {
        let average = calculateAverage(this.marks);
        console.log(`Student: ${this.name}`);
        console.log(`Marks: ${this.marks.join(", ")}`);
        console.log(`Average: ${average.toFixed(2)}`);
        
        if (average >= 90) console.log("Grade: A+");
        else if (average >= 75) console.log("Grade: A");
        else if (average >= 60) console.log("Grade: B");
        else if (average >= 50) console.log("Grade: C");
        else console.log("Grade: Fail");

        console.log("-------------------------------");
    }
}

// Objects
let s1 = new Student("Vaishnavi", [95, 88, 92]);
let s2 = new Student("Rahul", [78, 82, 80]);
let s3 = new Student("Sakshi", [45, 55, 50]);

let students: Student[] = [s1, s2, s3];

console.log("==== Using for loop ====");
for (let i = 0; i < students.length; i++) {
    students[i].display();
}

console.log("==== Using while loop ====");
let index = 0;
while (index < students.length) {
    students[index].display();
    index++;
}

console.log("==== Using do-while loop ====");
let j = 0;
do {
    students[j].display();
    j++;
} while (j < students.length);

console.log("==== Using for…of loop ====");
for (let student of students) {
    student.display();
}