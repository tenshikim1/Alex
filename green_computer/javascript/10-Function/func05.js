function foo(x, y, z) {
    console.log("x-%s, y=%s, z=%s", x, y, z);

    var result=0;

    if (x != undefined ) {
        result += x;
    }

    if (y != undefined) {
        result += y;
    }

    if (z != undefined) {
        result +=z;
    }

    console.log(">> result=%d", result);
}

//(1) 자바스크립트의 파라미터는 뒤에서부터 하나씩 생략 가능함.
foo(10, 20, 30); //s var x=10, y=20, z=30
foo(100, 200);  // var x=100, y= 200, z=undefined
foo(1000); // var x=1000,y=undefined,z=undefined
foo(); // var x=undefined, y=undefined, z=undefined