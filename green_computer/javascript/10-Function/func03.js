function f1(x) {
    var y = x + 1;
    return y;
}

function f2(x){
    return x*x + 1;
}

var x = 100;

var a = f1(x);

console.log("f1(%d) = %d", x, a);
console.log("f2(10) = %d", f2(10));