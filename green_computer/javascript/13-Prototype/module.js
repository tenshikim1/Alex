/**
 * moudule.js
 */
// Calc.js에서 내보낸 클래스를 가져온다.
// "./" 는 현재 폴더라는 의미

var Calc = require("./Calc.js");

var c1 = new Calc(10, 13);

c1.plus();
c1.minus();
c1.times();
c1.divide();


var c2 = new Calc(20, 13);

c2.plus();
c2.minus();
c2.times();
c2.divide();