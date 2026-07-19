// Student Information
let studentName = "Ankit";
let rollNo = 101;
let english = 85;
let maths = 92;
let science = 78;
let history = 88;

// Function to calculate total marks
function calculateTotal(e, m, s, h) {
    return e + m + s + h;
}

// Function to calculate percentage
function calculatePercentage(total) {
    return total / 4;
}

// Function to find grade
function findGrade(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 35) {
        return "D";
    } else {
        return "Fail";
    }
}

// Function to display report
function displayReport() {

    let total = calculateTotal(english, maths, science, history);
    let percentage = calculatePercentage(total);
    let grade = findGrade(percentage);

    console.log("========== Student Report ==========");
    console.log("Student Name :", studentName);
    console.log("Roll Number  :", rollNo);
    console.log("English      :", english);
    console.log("Maths        :", maths);
    console.log("Science      :", science);
    console.log("History      :", history);
    console.log("------------------------------------");
    console.log("Total Marks  :", total);
    console.log("Percentage   :", percentage + "%");
    console.log("Grade        :", grade);
}

// Calling the function
displayReport();