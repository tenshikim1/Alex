//배열끼리의 대입은 복사가 아닌 참조가 발생한다!!!!

var arr1 = [1,2,3];
var arr2 = arr1;
console.log("[before] arr1=%s", arr1);
console.log("[before] arr2=%s", arr2);

arr1[0]+=1;
arr1[1]+=2;
arr1[2]+=3;
console.log("[after1] arr1=%s", arr1);
console.log("[after1] arr2=%s", arr2);


arr1[0]+=10;
arr1[1]+=20;
arr1[2]+=30;
console.log("[after2] arr1=%s", arr1);
console.log("[after2] arr2=%s", arr2);