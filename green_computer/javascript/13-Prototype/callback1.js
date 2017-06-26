/**
 * 콜백함수
 * 파라미터로 전달되는 함수
 * 어떤 함수가 실행되는 과정에서 발생하는 상태변화를
 * 자신을 호출한 위치로 전달하고자 할 경우 사용.
 */

function print(x,y) {
    console.log("%d x %d = %d", x, y, x * y);

   
}

// 일반적인 함수의 호출
function gugu(level, callback) {
    for (var i=1; i<10; i++) {
        callback(level, i);
    }
}

gugu(7, print);

gugu(5, function(x, y) {
     console.log("%d 곱하기 %d = %d", x, y, x * y);
})