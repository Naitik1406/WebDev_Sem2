function calculateResult() {
    let subjects = document.getElementById("subjects").value;
    let totalMarks = 0;
    for (let i = 1; i <= subjects; i++) {
        let marks = parseFloat(prompt("Enter marks for subject " + i));
        totalMarks += marks;
    }
    let average = totalMarks / subjects;
    let grade= "";
    if (average >= 90 && average <= 100) {
        grade = "A";
    } else if (average >= 80 && average < 90) {
        grade = "B";
    } else if (average >= 70 && average < 80) {
        grade = "C";
    } else if (average >= 60 && average < 70) {
        grade = "D";
    } else {
        grade = "F";
    }
    document.getElementById("result").innerHTML = "Total Marks: " + totalMarks + "<br> Average: " + average.toFixed(2) + "<br> Grade: " + grade;
}

