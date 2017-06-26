// 생성자(Constructor) : 객체가 생성될 때 자동으로 호출되는 함수. 주로 멤버변수의 초기값을 구성하기 위해서 사용. 필요하다면 파라미터를 정의할 수도 있다.
// 9라인에 있는 함수 자체가 생성자
var Say = function(what) {
    console.log("Say의 객체가 생성됨");

    //생성자를 통해서 전달되는 파라미터는 보통
    //멤버면수에 보관하여
    //다른 함수들이 활용할 수 있도록 구성한다.
    this.msg = what;
};

Say.prototype.hello = function() {
    console.log(this.msg);
};

var kor = new Say("안녕하세요. 자바스크립트");
kor.hello();

var eng = new Say("Hello Javacript");
eng.hello();