var readline = require("readline-sync");

var age = readline.question('나이를 입력하세요: ');
age = Number(age);

console.log(age);

var height = readline.question('키를 입력하세요: ');
height = Number (height);

console.log("나의 키는: %d", height);
