var Toast = function(){
    var price;
    var number; 
    var taste;
    var popular;

    this.SetPrice = function(p){
        price = p;
    }

    this.GetPrice = function() {
        return price;
    }

    this.SetNumber = function(n){
        number = n;
    }

    this.GetNumber = function() {
        return number;
    }

    
    
}

Toast.prototype.TotalPrice = function() {
    return this.GetPrice() * this.GetNumber();
}


var t1 = new Toast();

t1.SetPrice(1000);
t1.SetNumber(3);
console.log(t1.TotalPrice());


var CheeseToast = function(){
    var topping;
    var saleprice;

    this.base = Toast;
    this.base();

    
}

CheeseToast.prototype = Toast.prototype;
CheeseToast.prototype.constructor = CheeseToast;
CheeseToast.prototype.SalePrice = function(){
         return this.GetPrice() * this.GetNumber() * 0.7;
}

var ct1 = new CheeseToast();

ct1.SetPrice(2000);
ct1.SetNumber(5);
console.log(ct1.TotalPrice());
console.log(ct1.SalePrice());
