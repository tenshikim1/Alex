var readline = require('readline-sync');

var grade;
grade = readline.question("학점을 입력하세요(A~F): ");

switch (grade) {
    case 'A':
    case 'B':
    case 'C':
        console.log("PASS");
        break;
    default:
        console.log("NON PASS");
        break;
}