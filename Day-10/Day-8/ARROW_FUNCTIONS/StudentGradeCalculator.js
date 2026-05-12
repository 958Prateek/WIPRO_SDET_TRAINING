// Student Grade Calculator using Arrow Function

const calculateGrade = marks => {
    if (marks >= 90) {
        return "A";
    }
    else if (marks >= 75) {
        return "B";
    }
    else if (marks >= 50) {
        return "C";
    }
    else {
        return "Fail";
    }
};
console.log(calculateGrade(82));