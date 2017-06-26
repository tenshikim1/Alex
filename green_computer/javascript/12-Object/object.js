var obj = {
    sayEng: function() {
        console.log("HEllo Javascript"); //변수나 함수나 차이가 없기때문에 가능 sayEng: 1 과 같은형태
    },
    sayKor: function() {
        console.log("안녕하세요. 자바스크립트");
    },
    foo: function(a,b) {
        return a+b;
    }
};

obj.sayEng();
obj.sayKor();
var x = obj.foo(100,200);
console.log("x=%d", x);