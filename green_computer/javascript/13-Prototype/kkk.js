/**
 * 모든 프로그램 언어는 내장된 객체들이 존재
 * --> Application Programming Interface
 * --> API
 * 
 *  --> API document
 *  --> API Reference
 */

var k = [1,2,3];

console.log(k);

k.push(4);
k.push(5);

console.log(k);

var name = "Hello World";
var is = name.indexOf("World");

if(is > -1) {
    console.log("World가 포함됨");
} else {
    console.log("World가 포함안됨");
}