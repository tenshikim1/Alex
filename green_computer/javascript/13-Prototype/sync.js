/**
 * 동기처리(sync.js)
 * 프로그램 코드가 순서대로 실행되는 상태
 */

function hello(msg) {
    console.log("--- start ---"); // --> 1초
    setTimeout(function() {
        console.log(msg); 
    }, 5000);  // --> 5초
    console.log("--- done ---");  // --> 6초
}

hello("Hello callback");