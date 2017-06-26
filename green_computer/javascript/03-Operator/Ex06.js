var readline = require('readline-sync');

var num1, num2;

num1 = readline.question("첫 번째 숫자를 입력하세요: ");
num2 = readline.question("두 번째 숫자를 입력하세요: ");

num1 = Number(num1);
num2 - Number(num2);

var result1 = num1 == num2;
var result2 = num1 != num2;
var result3 = num1 > num2;

console.log("%d == %d --> %d\n", num1, num2, result1);
console.log("%d != %d --> %d\n", num1, num2, result2);
console.log("%d > %d --> %d\n", num1, num2, result3);

