/** JSON 정의 --> 변수들의 그룹 */
var student = [{
    
    studno: 10101,
    grade: 1,
    name: '학생1',
    phoneno: '010-1231-2342'
},
    {
    studno: 20202,
    grade: 2,
    name: '학생2',
    phoneno: '010-4578-2356'
}];





//정의와 동시에 변수가 생성되므로, 별도의 객체 생성 구문은 필요없다.

console.log("학번: %d", student.studno);
console.log("학년: %d", student.grade);
console.log("이름: %d", student.name);
console.log("연락처: %d", student.phoneno);

for (var i = 0; i < student.length; i++) {
    console.log("[%d 번째 학생]", i+1);
    console.log(" >> 학번: %d", student[i].studno);
    console.log(" >> 학번: %d", student[i].grade);
    console.log(" >> 이름: %s", student[i].name);
    console.log(" >> 연락처: %s", student[i].phoneno);
    console.log();
}
