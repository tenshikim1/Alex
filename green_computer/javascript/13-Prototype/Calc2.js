var readline = require("readline-sync");


var Calc = function(_num,_num2) {
    this.num = _num;
    this.num2 = _num2;
    this.result;

}


Calc.prototype = 
{


plus : function(){
    this.result = this.num + this.num2;

    console.log("%d + %d = %d", this.num, this.num2, this.result );
},

minus : function(){
    this.result = this.num - this.num2;

    console.log("%d - %d = %d", this.num, this.num2, this.result );
},

times : function(){
    this.result = this.num * this.num2;

    console.log("%d * %d = %d", this.num, this.num2, this.result );
},

divide : function(){
    this.result = this.num / this.num2;

    console.log("%d / %d = %d", this.num, this.num2, this.result.toFixed(2) );
}
}

console.log("==============[계산기 입니다]================")
var calc1 = readline.question("첫번째 숫자를 입력하십시오: ");
calc1 = Number(calc1);
var calc2 = readline.question("두번째 숫자를 입력하십시오: ");
calc2 = Number(calc2);

var c1 = new Calc(calc1,calc2);

var mark = readline.question("숫자를 입력하시오(1번 = 덧셈     2번 = 뺄셈     3번 = 곱셈     4번 = 나눗셈): ");
mark = Number(mark);
switch(mark)
{
    case 1: c1.plus(); break;
    case 2: c1.minus(); break;
    case 3: c1.times(); break;
    case 4: c1.divide(); break;

    default: console.log("1번 부터 4번 사이의 값만 입력하십시오!!"); break;
}


