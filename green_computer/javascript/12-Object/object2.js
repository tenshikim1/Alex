/**
 객체(Object)
 프로그램의 기능을 현실 세계에 존재하는 사물로 보고, 동사적 특징과 명사적 특징을 구분하여 구현한 형태.
 명사적 특징 --> 변수 : 멤버변수, 프로퍼티
 동사적 특징 --> 함수 : 메서드
 */

//회원 한명을 표현하는 객체
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
        
    },
    edit: function(name, age) {
        this.name = name;
        this.age = age;
        console.log("회원정보가 수정되었습니다");
       
    },
    out: function() {
        //null --> 임의로 비워놓은 값.
        this.name = null;
        this.age = null;
        console.log("탈퇴되었습니다.");
    }
    

};

user.view();

user.join("JS학생", 19);
user.view();

user.edit("tenshi", 30);

user.view();

user.out();
user.view();