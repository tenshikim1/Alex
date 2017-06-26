var CenterPoint = {
    x: 5,
    y: 10
};

/** 다른 구조체에 대한 변수를 멤버변수로 포함하는 구조체 */
var circle = {
    center: CenterPoint, // 중심의 좌표
    radius: 5.10    //반지름
};

console.log("원의 중심 좌표: (%d, %d)", circle.center.x, circle.center.y);
console.log("원의 반지름: %d", circle.radius);