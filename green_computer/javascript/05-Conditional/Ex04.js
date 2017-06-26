var readline = require('readline-sync');

var point;
point = readline.question("점수를 입력하세요: ");
point = Number(point);

var grade;
if (point > 90){
    grade = "A";
} else if (point > 80) {
    grade = "B";
} else if (point > 70) {
    grade = "C";
} else if (point > 60) {
    grade = "D";
} else {
    grade ='F';
}

console.log('%s 학점입니다.', grade);