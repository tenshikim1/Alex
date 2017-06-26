//* 객체를 생산하기 위한 틀의 역할을 하는 함수 */
// --> 클래스
// --> 일반적으로 클래스의 이름은 대문자로 시작

var User = function() {
    console.log("User 클래스의 객체가 생성됨");

    this.name = null;
    this.age = null;
};

//** 메서드의 추가 */
// --> 예약어 prototype을 사용.
User.prototype.view = function() {
    console.log(">> 이름: %s, 나이: %d",this.name, this.age)
};

User.prototype.join = function(name, age) { // 지역변수 취급
        this.name = name;
        this.age = age;
        console.log("가입되었습니다.");

        //같은 객체내의 다른 메서드에 접근할 경우 "this.함수명()"
        this.view();
        
    };
User.prototype.edit = function(name, age) {
        this.name = name;
        this.age = age;
        console.log("회원정보가 수정되었습니다");
        this.view();
    };
User.prototype.out = function() {
        //null --> 임의로 비워놓은 값.
        this.name = null;
        this.age = null;
        console.log("탈퇴되었습니다.");
        this.view();
    };
    
var user1 = new User();
user1.join("학생1", 20);
user1.edit("학생1(수정)", 21);
user1.out();

var user2 = new User();
user2.join("학생2", 20);
user1.edit("학생2(수정)", 21);
user1.out();