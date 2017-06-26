var readline = require('readline-sync');

var myage;

myage = readline.question("나이를 입력하세요: ");
myage = Number(myage);

if(myage == 19){
    console.log(" >> 19살 입니다.");
}

if(myage != 19){
    console.log(" >> 19살이 아닙니다.");
}

if(myage > 19) {
    console.log(" >> 성인입니다.");
}

if(myage <= 19){
    console.log(" >> 학생입니다.");
}
