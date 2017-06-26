var readline = require('readline-sync');

var num1, num2;
var max;

num1 = readline.question('첫 번째 숫자를 입력하세요: ');
num2 = readline.question('두 번째 숫자를 입력하세요: ');

num1 = Number(num1);
num2 = Number(num2);

max = (num1 > num2) ? num1 : num2;

console.log("두 값중 더 큰값은 %d 입니다.\n", max);