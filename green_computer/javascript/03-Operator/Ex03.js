var readline = require('readline-sync');

var source;

source = readline.question('숫자를 입력하세요: ');
source = Number(source);

console.log(source);

source += 100;

console.log(source);

source *= 2;

console.log(source);