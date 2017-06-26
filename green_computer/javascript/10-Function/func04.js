function f1(x) {
    return x+1;
}

function f2(x) {
    return f1(x) + 1;
}

var x = 100;
var y = f2(x);

console.log("f2(%d)=%d", x,y);