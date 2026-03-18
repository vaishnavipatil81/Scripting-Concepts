function calculateAverage(marks) {
    var sum = 0;
    for (var i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}
// Class
var Student = /** @class */ (function () {
    function Student(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    Student.prototype.display = function () {
        var average = calculateAverage(this.marks);
        console.log("Student: ".concat(this.name));
        console.log("Marks: ".concat(this.marks.join(", ")));
        console.log("Average: ".concat(average.toFixed(2)));
        if (average >= 90)
            console.log("Grade: A+");
        else if (average >= 75)
            console.log("Grade: A");
        else if (average >= 60)
            console.log("Grade: B");
        else if (average >= 50)
            console.log("Grade: C");
        else
            console.log("Grade: Fail");
        console.log("-------------------------------");
    };
    return Student;
}());
// Objects
var s1 = new Student("Vaishnavi", [95, 88, 92]);
var s2 = new Student("Rahul", [78, 82, 80]);
var s3 = new Student("Sakshi", [45, 55, 50]);
var students = [s1, s2, s3];
console.log("==== Using for loop ====");
for (var i = 0; i < students.length; i++) {
    students[i].display();
}
console.log("==== Using while loop ====");
var index = 0;
while (index < students.length) {
    students[index].display();
    index++;
}
console.log("==== Using do-while loop ====");
var j = 0;
do {
    students[j].display();
    j++;
} while (j < students.length);
console.log("==== Using for…of loop ====");
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student = students_1[_i];
    student.display();
}
