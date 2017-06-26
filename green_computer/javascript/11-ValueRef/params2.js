function foo(bar) {
    console.log("[foo-before] %s", bar);
    bar[0] += 100;
    bar[1] += 100;
    console.log("[foo-after] %s", bar);
}

var data= [10,20];
console.log("[out-before] %s", data);

foo(data);

console.log("[out-after[ %s", data);