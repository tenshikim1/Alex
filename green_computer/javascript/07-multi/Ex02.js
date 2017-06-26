var readline = require('readline-sync');

var num;

while (1) {
    num = readline.question("숫자를 입력하세요(2~9, 범위 밖의 경우 종료): ");
    num= Number(num);
    
    if (num < 2 || num >9){ break; }

    for(var i = 1; i < 10; i++){
            console.log("%d x %d = %d", num, i, num*i);
    }
    
}