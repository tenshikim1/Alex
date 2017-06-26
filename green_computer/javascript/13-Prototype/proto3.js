var Calc = function(x,y) {
    this.x = x;
    this.y = y;


};

Calc.prototype.plus = function() {
    var z = this.x + this.y;
    console.log("%d + %d = %d", this.x , this.y, z );
};

Calc.prototype.minus = function() {
    var z = this.x - this.y;
    console.log("%d - %d = %d", this.x , this.y, z );
};

Calc.prototype.times = function() {
    var z = this.x * this.y;
    console.log("%d * %d = %d", this.x , this.y , z );
};

Calc.prototype.divide = function() {
    var z = this.x / this.y;
    console.log("%d / %d = %d", this.x , this.y, z );
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