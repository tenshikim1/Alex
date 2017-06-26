/**
 * Calc.js
 * 계산기 모듈
 * 일반적으로 하나의 모듈에는 하나의 클래스
 * 파일이름은 클래스 이름과 동일.
 */

var Calc = function(x,y) {
    this.x = x;
    this.y = y;


};

Calc.prototype = {
    plus : function() {
    var z = this.x + this.y;
    console.log("%d + %d = %d", this.x , this.y, z );
},
    minus :function() {
    var z = this.x - this.y;
    console.log("%d - %d = %d", this.x , this.y, z );
},
    times : function() {
    var z = this.x * this.y;
    console.log("%d * %d = %d", this.x , this.y , z );
}, 
    divide : function() {
    var z = this.x / this.y;
    console.log("%d / %d = %d", this.x , this.y, z );
}
};

//작성한 클래스를 내보내기
module.exports = Calc;
