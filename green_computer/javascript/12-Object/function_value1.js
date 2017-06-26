// 자바스크립트에서 변수와 함수는 동급이다.
function hello() {
    console.log("Hello world");
}



//함수를 변수처럼 직접 출력도 가능하다.
console.log("%s", hello);
//함수를 다른 변수에 대입도 가능하다.
var say = hello;
//함수가 대입된 변수는 그 자체가 함수의 역할을 한다.
say();