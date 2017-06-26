var readline = require('readline-sync');

var money1 = readline.question("첫 번째 송금액: ");
var money2 = readline.question("두 번째 송금액: ");

money1 = Number(money1);
money2 = Number(money2);

var total = money1 + money2;
console.log("총 송금액 %d가 출금되었습니다.", total);
// parseInt와 number의 차이점: parseInt는 무조건 정수만 된다!!