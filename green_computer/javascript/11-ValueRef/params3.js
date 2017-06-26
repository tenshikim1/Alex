function foo(bar) {
    console.log("[foo-before] {a: %d, b: %d}", bar.a, bar.b);
    bar.a += 100;
    bar.b += 100;
    console.log("[foo-after] {a: %d, b: %d}", bar.a, bar.b);
}

var data= {a: 10, b:20};
console.log("[out-before] {a: %d, b: %d}", data.a, data.b);

foo(data);

console.log("[out-after] {a: %d, b: %d}", data.a, data.b);