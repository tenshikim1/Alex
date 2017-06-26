var readline = require('readline-sync');

var num1, num2;
var result1, result2, result3, result4, result5;

num1 = readline.question("첫번째 숫자를 입력하세요: ");
num2 = readline.question("두번째 숫자를 입력하세요: ");
num1 = Number(num1);
num2 = Number(num2);

result1 = num1 +num2;
console.log('%d + %d = %d',num1,num2,result1);
