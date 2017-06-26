/** 객체 --> 붕어빵
 * 
 * 여러개의 객체를 생산하기 위한 붕어빵 틀 --> 클래스(prototype) 자바스크립트에서는 클래스를 프로토타입이라고 한다.
 */

var user = {

    name: null, //전역변수 취급
    age: null,

    view: function(){
        console.log(">> 이름: %s, 나이: %d", this.name, this.age);
    },

    join: function(name, age) { // 지역변수 취급
        this.name = name;
        this.age = age;
        console.log("가입되었습니다.");

        //같은 객체내의 다른 메서드에 접근할 경우 "this.함수명()"
        this.view();
        
    },
    edit: function(name, age) {
        this.name = name;
        this.age = age;
        console.log("회원정보가 수정되었습니다");
        this.view();
    },
    out: function() {
        //null --> 임의로 비워놓은 값.
        this.name = null;
        this.age = null;
        console.log("탈퇴되었습니다.");
        this.view();
    }
    

};
user.name ="hih"
user.view();

user.join("JS학생", 19);

user.edit("tenshi", 30);

user.out();
