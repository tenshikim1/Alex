function foo(bar) {
    console.log("[foo-before] %d", bar);
    bar += 100;
    console.log("[foo-ager] %d", bar);
}

var data= 100;
console.log("[out-before] %d", data);

foo(data);

console.log("[out-after[ %d", data);