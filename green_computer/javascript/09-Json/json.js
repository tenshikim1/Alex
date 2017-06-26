/** JSON 정의 --> 변수들의 그룹 */

var student = {
    // 변수이름: 값, 변수이름: 값... 의 형식으로 변수들을 나열
    studno: 10101,
    grade: 1,
    name: '학생1',
    phoneno: '010-1231-2342'
};




//정의와 동시에 변수가 생성되므로, 별도의 객체 생성 구문은 필요없다.

console.log("학번: %d", student.studno);
console.log("학년: %d", student.grade);
console.log("이름: %d", student.name);
console.log("연락처: %d", student.phoneno);

var student2 = {
    // 변수이름: 값, 변수이름: 값... 의 형식으로 변수들을 나열
    studno: 20202,
    grade: 2,
    name: '학생2',
    phoneno: '010-4578-2356'
};
//이름표를 갖는 배열처럼 접근도 가능
console.log("학번: %d", student2['studno']);
console.log("학년: %d", student2['grade']);
console.log("이름: %s", student2['name']);
console.log("연락처: %s", student2['phoneno']);
