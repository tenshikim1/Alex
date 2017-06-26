var Calc = function(x,y) {
    this.x = x;
    this.y = y;


};
/**
 * key: value 쌍으로 하나의 값에 여러 데이터를 포함할 수 있다는 문법적 특성을 응요하여 prototype에 JSON형식으로 한번에 메서드 정의 가능!!!
 */
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